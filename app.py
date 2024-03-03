from flask import Flask, render_template, request, jsonify
import requests
from config import API_KEY

app = Flask(__name__)


url = f'http://127.0.0.1:5000/nhl/players'
PLAYER_STATS_BASE_URL = f'http://127.0.0.1:5000/nhl/players/2024'

@app.route('/')
def index():
    players = requests.get(url).json()
    sorted_players = sorted(players, key=lambda x: x['FirstName'])
    return render_template('index.html', players=sorted_players)

@app.route('/player', methods=['POST'])
def player():
    player_id = request.form['player_id']
    player_url = f'{PLAYER_STATS_BASE_URL}/{player_id}'
    player_data = requests.get(player_url).json()
    if player_data:
        player = player_data[0]
    else:
        player = None
    return render_template('player.html', player=player)

# @app.route('/table', methods=['POST'])
# def table():
#     player_id = request.form['player_id']
#     player_data = requests.get(url1).json()
#     player_stats = [p for p in player_data if p['PlayerID'] == player_id]
#     return render_template('table.html', player_stats=player_stats)

@app.route('/nhl/players')
def get_nhl_players():
    api1 = 'https://api.sportsdata.io/v3/nhl/scores/json/Players?key=' + API_KEY
    response = requests.get(api1)
    players = response.json()
    return jsonify(players)

@app.route('/nhl/players/2024/')
@app.route('/nhl/players/2024/<player_id>')
def get_nhl_stats(player_id=None):
    api2 = 'https://api.sportsdata.io/v3/nhl/stats/json/PlayerSeasonStats/2024?key=' + API_KEY
    response = requests.get(api2)
    players = response.json()
    if player_id is None:
       matching_players = players
    else:
        matching_players = [p for p in players if p['PlayerID'] == int(player_id)]

    return jsonify(matching_players)

# @app.route('/geolocation')

# @app.route('/draft')

if __name__ == '__main__':
    app.run(debug=True)
