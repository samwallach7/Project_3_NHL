const axios = require('axios');

async function getData() {
  try {
    const response = await axios.get('http://localhost:3000/api/players');
    const players = response.data;
    console.log(players); // Log the data to the console
  } catch (error) {
    console.error('Failed to fetch players data:', error);
  }
}

getData();
