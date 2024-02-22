// Create the map object
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4
});

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Loop through the teams array, and create a marker for each team object
for (let i = 0; i < jsonData.length; i++) {
    // Conditionals for founding year
    let color = "";
    if (jsonData[i].year > 1990) {
        color = "green";
    }
    else if (jsonData[i].year > 1966) {
        color = "yellow";
    }
    else if (jsonData[i].year > 1900) {
        color = "red";
    }
    else {
        color = "violet";
    }

    let team = jsonData[i];
    L.marker([team.lat, team.lon])
        .bindPopup(`<h1>${team.teamName}</h1> <hr> <h3> Franchise ID: ${team.franchID}</h3> <hr> <h3> Year Founded: ${team.year}</h3>`)
        .addTo(myMap);
}