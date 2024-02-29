from flask import Flask, render_template, request, jsonify
import requests
from config import API_KEY


app = Flask(__name__)

url = "http://127.0.0.1:5000/nhl/players"
url1 ="http://127.0.0.1:5000/nhl/players/2024"

@app.route('/')
def index():
    players_data = requests.get(url).json()
    players = [{'PlayerID': player['PlayerID'], 'Name': player['FirstName'] + ' ' + player['LastName']} for player in players_data]
    return render_template('index.html', players=players)

@app.route('/nhl/players')
def get_nhl_players():
    api1 = 'https://api.sportsdata.io/v3/nhl/scores/json/Players?key=' + API_KEY
    response = requests.get(api1)
    players = response.json()
    return jsonify(players)

@app.route('/nhl/players/2024')
def get_nhl_stats():
    api2 = 'https://api.sportsdata.io/v3/nhl/stats/json/PlayerSeasonStats/2024?key=' + API_KEY
    response = requests.get(api2)
    players = response.json()
    return jsonify(players)

# @app.route('/geolocation')

# @app.route('/league')

# @app.route('/draft')

if __name__ == '__main__':
    app.run(debug=True)