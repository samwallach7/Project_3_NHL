import apiKeys from './config.js';

let url = `https://api.sportsdata.io/v3/nhl/scores/json/Players?key=${apiKeys.apiKey1}`
let url1 =`https://api.sportsdata.io/v3/nhl/stats/json/PlayerSeasonStats/2024?key=${apiKeys.apiKey1}`

function init(){
    
    d3.json(url).then(function(data){

        // console.log(data)

        let dropDownmenu = d3.select("#selDataset")
        
        let formattedNames = []

        for (let i = 0; i < data.length; i++) {
            let fullName = data[i].FirstName + " " + data[i].LastName;
            formattedNames.push(fullName);
        }
        
        formattedNames.sort();
        
        for (let i = 0; i < formattedNames.length; i++) {
            dropDownmenu.append('option')
            .text(formattedNames[i]);
        }

        let firstPlayer = data[0]
        playerData(firstPlayer.PlayerID); // Pass the playerId
        createTable(firstPlayer.PlayerID)
    });
}


function optionChanged(value){
    playerData(value);
    createTable(value)
}


function playerData(playerId){
d3.json(url).then(function(data){

    // Sort the data by first name
    data.sort((a, b) => a.FirstName.localeCompare(b.FirstName));

    //find a player by their unique player id
    let player = data.find(item => item.PlayerID === playerId);

    //extract data from the json object
    let extractedData = {
    FirstName: player.FirstName,
    LastName: player.LastName,
    BirthCity: player.BirthCity,
    BirthState: player.BirthState,
    Jersey: player.Jersey,
    PlayerID: player.PlayerID,
    Position: player.Position,
    BirthDate: player.BirthDate.split("T")[0],
    Height: player.Height,
    Weight: player.Weight,
    InjuryStartDate: player.InjuryStartDate.split("T")[0],
    InjuryStatus: player.Status,
    Team: player.Team};

    // console.log(player)

    let panel = d3.select("#player-metadata");

    //clear existing content
    panel.html("");

    //append data to the panel
    for (let key in extractedData) {
        panel.append("h6")
        .text(`${key.toUpperCase()}: ${extractedData[key]}`)
        // .style("font-weight", "bold");
    }
    });
}

function createTable(playerId) {
    d3.json(url1).then(function(data) {
      const table = document.createElement('table');
      const header = table.createTHead();
      const headerRow = header.insertRow();
      const fields = ['Name', 'PlayerID', 'Assists', 'Blocks', 'FaceoffsWon', 'FantasyPoints', 'Games', 'Hits', 'Minutes', 'PenaltyMinutes', 'ShotsOnGoal', 'Takeaways', 'Updated'];
      
      fields.forEach(field => {
        const th = document.createElement('th');
        th.textContent = field;
        headerRow.appendChild(th);
      });
  
      const body = table.createTBody();
      data.forEach(obj => {
        if(obj.PlayerID === playerId) {
          const row = body.insertRow();
          fields.forEach(field => {
            const cell = row.insertCell();
            cell.textContent = obj[field];
          });
        }
      });
  
      //remove existing table if it exists
      const existingTable = document.getElementById('playerTable');
      if(existingTable) {
        existingTable.remove();
      }

      //append the new table to the body
      table.id = 'playerTable';
      document.body.appendChild(table);
    });
}
  

init()