let jsonData = [
    {
        year: 1917,
        lgID: "NHL",
        tmID: "MTL",
        franchID: "MTL",
        teamName: "Montreal Canadiens",
        seatingCapacity: "21,302",
        lat: 45.496111,
        lon: -73.569444
    },
    {
        year: 1917,
        lgID: "NHL",
        tmID: "OTS",
        franchID: "STE",
        teamName: "Ottawa Senators",
        seatingCapacity: "17,373",
        lat: 45.296944,
        lon: -75.927222
    },
    {
        year: 1917,
        lgID: "NHL",
        tmID: "TOA",
        franchID: "TOR",
        teamName: "Toronto Maple Leafs",
        seatingCapacity: "18,819",
        lat: 43.643333,
        lon: -79.379167
    },
    {
        year: 1924,
        lgID: "NHL",
        tmID: "BOS",
        franchID: "BOS",
        teamName: "Boston Bruins",
        seatingCapacity: "17,565",
        lat: 42.366303,
        lon: -71.062228
    },
    {
        year: 1926,
        lgID: "NHL",
        tmID: "NYR",
        franchID: "NYR",
        teamName: "New York Rangers",
        seatingCapacity: "18,006",
        lat: 40.750556,
        lon: -73.993611
    },
    {
        year: 1926,
        lgID: "NHL",
        tmID: "DTC",
        franchID: "DET",
        teamName: "Detroit Red Wings",
        seatingCapacity: "19,515",
        lat: 42.551262,
        lon: -83.217862
    },
    {
        year: 1926,
        lgID: "NHL",
        tmID: "CHI",
        franchID: "CHI",
        teamName: "Chicago Blackhawks",
        seatingCapacity: "19,717",
        lat: 41.880556,
        lon: -87.674167
    },
    {
        year: 1967,
        lgID: "NHL",
        tmID: "STL",
        franchID: "STL",
        teamName: "St. Louis Blues",
        seatingCapacity: "18,724",
        lat: 38.626667,
        lon: -90.2025
    },
    {
        year: 1967,
        lgID: "NHL",
        tmID: "PIT",
        franchID: "PIT",
        teamName: "Pittsburgh Penguins",
        seatingCapacity: "18,387",
        lat: 40.439444,
        lon: -79.989167
    },
    {
        year: 1967,
        lgID: "NHL",
        tmID: "PHI",
        franchID: "PHI",
        teamName: "Philadelphia Flyers",
        seatingCapacity: "19,543",
        lat: 39.901111,
        lon: -75.171944
    },
    {
        year: 1967,
        lgID: "NHL",
        tmID: "DAL",
        franchID: "DAL",
        teamName: "Dallas Stars",
        seatingCapacity: "18,532",
        lat: 32.790556,
        lon: -96.810278
    },
    {
        year: 1967,
        lgID: "NHL",
        tmID: "LAK",
        franchID: "LAK",
        teamName: "Los Angeles Kings",
        seatingCapacity: "18,230",
        lat: 34.043056,
        lon: -118.267222
    },
    {
        year: 1970,
        lgID: "NHL",
        tmID: "VAN",
        franchID: "VAN",
        teamName: "Vancouver Canucks",
        seatingCapacity: "18,910",
        lat: 49.277778,
        lon: -123.108889
    },
    {
        year: 1970,
        lgID: "NHL",
        tmID: "BUF",
        franchID: "BUF",
        teamName: "Buffalo Sabres",
        seatingCapacity: "19,070",
        lat: 42.875,
        lon: -78.876389
    },
    {
        year: 1972,
        lgID: "NHL",
        tmID: "NYI",
        franchID: "NYI",
        teamName: "New York Islanders",
        seatingCapacity: "15,795",
        lat: 40.682661,
        lon: -73.975225
    },
    {
        year: 1972,
        lgID: "NHL",
        tmID: "CAL",
        franchID: "CAL",
        teamName: "Calgary Flames",
        seatingCapacity: "19,289",
        lat: 51.0375,
        lon: -114.051944
    },
    {
        year: 1974,
        lgID: "NHL",
        tmID: "WAS",
        franchID: "WAS",
        teamName: "Washington Capitals",
        seatingCapacity: "18,506",
        lat: 38.898056,
        lon: -77.020833
    },
    {
        year: 1974,
        lgID: "NHL",
        tmID: "NJD",
        franchID: "NJD",
        teamName: "New Jersey Devils",
        seatingCapacity: "16,514",
        lat: 40.733611,
        lon: -74.171111
    },
    {
        year: 1979,
        lgID: "NHL",
        tmID: "COL",
        franchID: "COL",
        teamName: "Colorado Avalanche",
        seatingCapacity: "17,809",
        lat: 39.748611,
        lon: -105.0075
    },
    {
        year: 1979,
        lgID: "NHL",
        tmID: "PHO",
        franchID: "PHO",
        teamName: "Phoenix Coyotes",
        seatingCapacity: "17,125",
        lat: 33.531944,
        lon: -112.26111
    },
    {
        year: 1979,
        lgID: "NHL",
        tmID: "CAR",
        franchID: "CAR",
        teamName: "Carolina Hurricanes",
        seatingCapacity: "18,680",
        lat: 35.803333,
        lon: -78.721944
    },
    {
        year: 1979,
        lgID: "NHL",
        tmID: "EDM",
        franchID: "EDM",
        teamName: "Edmonton Oilers",
        seatingCapacity: "18,347",
        lat: 53.571389,
        lon: -113.456111
    },
    {
        year: 1991,
        lgID: "NHL",
        tmID: "SJS",
        franchID: "SJS",
        teamName: "San Jose Sharks",
        seatingCapacity: "17,562",
        lat: 37.332778,
        lon: -121.901111
    },
    {
        year: 1992,
        lgID: "NHL",
        tmID: "TBL",
        franchID: "TBL",
        teamName: "Tampa Bay Lightning",
        seatingCapacity: "19,092",
        lat: 27.942778,
        lon: -82.451944
    },
    {
        year: 1993,
        lgID: "NHL",
        tmID: "ANA",
        franchID: "ANA",
        teamName: "Anaheim Ducks",
        seatingCapacity: "17,174",
        lat: 33.807778,
        lon: -117.87667
    },
    {
        year: 1993,
        lgID: "NHL",
        tmID: "FLO",
        franchID: "FLO",
        teamName: "Florida Panthers",
        seatingCapacity: "19,250",
        lat: 26.158333,
        lon: -80.325556
    },
    {
        year: 1998,
        lgID: "NHL",
        tmID: "NAS",
        franchID: "NAS",
        teamName: "Nashville Predators",
        seatingCapacity: "17,113",
        lat: 36.159167,
        lon: -86.778611
    },
    {
        year: 1999,
        lgID: "NHL",
        tmID: "WPG",
        franchID: "WPG",
        teamName: "Winnipeg Jets",
        seatingCapacity: "15,321",
        lat: 49.892778,
        lon: -97.143611
    },
    {
        year: 2000,
        lgID: "NHL",
        tmID: "CBS",
        franchID: "CBS",
        teamName: "Columbus Blue Jackets",
        seatingCapacity: "18,144",
        lat: 39.969283,
        lon: -83.006111
    },
    {
        year: 2000,
        lgID: "NHL",
        tmID: "MIN",
        franchID: "MIN",
        teamName: "Minnesota Wild",
        seatingCapacity: "17,954",
        lat: 44.944722,
        lon: -93.101111
    },
    {
        year: 2016,
        lgID: "NHL",
        tmID: "VGK",
        franchID: "VGK",
        teamName: "Vegas Golden Knights",
        seatingCapacity: "17,368",
        lat: 36.102778,
        lon: -115.178333
    },
    {
        year: 2021,
        lgID: "NHL",
        tmID: "SEA",
        franchID: "SEA",
        teamName: "Seattle Kraken",
        seatingCapacity: "17,459",
        lat: 47.622,
        lon: -122.354
    }
];