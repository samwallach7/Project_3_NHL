import apiKeys from './config.js';

let url = `https://api.sportsdata.io/v3/nhl/scores/json/Players?key=${apiKeys.apiKey1}`

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
        dropDownmenu.append('option').text(formattedNames[i]);
    }

    let extractedData = {
        BirthCity: data.BirthCity,
        BirthDate: data.BirthDate,
        BirthState: data.BirthState,
        FirstName: data.FirstName,
        Height: data.Height,
        InjuryStartDate: data.InjuryStartDate,
        InjuryStatus: data.InjuryStatus,
        Jersey: data.Jersey,
        LastName: data.LastName,
        Position: data.Position,
        Team: data.Team,
        Weight: data.Weight
    };
    
    let playerMetadataElement = document.getElementById("player-metadata");

    // Clear existing content
    playerMetadataElement.innerHTML = "";
    
    // Create a list to hold the player data
    let list = document.createElement("ul");
    
    // Loop through the extractedData object and create list items for each property
    for (let key in extractedData) {
        let listItem = document.createElement("li");
        listItem.textContent = `${key}: ${extractedData[key]}`;
        list.appendChild(listItem);
    }
    
    // Append the list to the player-metadata element
    playerMetadataElement.appendChild(list);
    
});