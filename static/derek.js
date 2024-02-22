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
});