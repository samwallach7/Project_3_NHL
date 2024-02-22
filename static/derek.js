import apiKeys from './config.js';

let url = `https://api.sportsdata.io/v3/nhl/scores/json/Players?key=${apiKeys.apiKey1}`

function init(){
    
    d3.json(url).then(function(data){

        console.log(data)

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
    });
}

init();


function optionChanged(value){
    playerData(value);
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

    console.log(player)

    let panel = d3.select("#player-metadata");

    //clear existing content
    panel.html("");

    // Append data to the panel
    for (let key in extractedData) {
        panel.append("h6")
        .text(`${key.toUpperCase()}: ${extractedData[key]}`)
        .style("font-weight", "bold");
    }
    });
}

init();
