const { apikeys } = require('./config');

const apiKey1 = apikeys.apiKey1;
const url = `https://api.sportsdata.io/v3/nhl/scores/json/Players?key=${apiKey1}`;


const axios = require('axios');
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/players', async (req, res) => {
  try {
    const response = await axios.get(url);
    const players = response.data;

    // Save players data to MongoDB
    const client = await MongoClient.connect('mongodb://localhost:27017');
    const db = client.db('nhlDB');
    const collection = db.collection('players-collection');
    await collection.insertMany(players);

    res.json(players);
  } catch (error) {
    console.error('Failed to fetch or save players data:', error);
    res.status(500).send('Failed to fetch or save players data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

