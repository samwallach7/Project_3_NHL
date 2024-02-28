# from flask import Flask, jsonify
# import requests
# from flask_sqlalchemy import SQLAlchemy
from config import API_KEY


# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///nhl_stats.db'
# db = SQLAlchemy(app)

# class PlayerStats(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100))
#     player_id = db.Column(db.String(50))
#     assists = db.Column(db.Integer)
#     blocks = db.Column(db.Integer)
#     faceoffs_won = db.Column(db.Integer)
#     fantasy_points = db.Column(db.Float)
#     games = db.Column(db.Integer)
#     hits = db.Column(db.Integer)
#     minutes = db.Column(db.Integer)
#     penalty_minutes = db.Column(db.Integer)
#     season = db.Column(db.String(10))
#     shots_on_goal = db.Column(db.Integer)
#     takeaways = db.Column(db.Integer)
#     updated = db.Column(db.String(50))

#     def __repr__(self):
#         return f"<PlayerStats(name={self.name}, player_id={self.player_id})>"

# @app.route('/fetch-and-store')
# def fetch_and_store():
#     url = f'https://api.sportsdata.io/v3/nhl/stats/json/PlayerSeasonStats/2024?key={API_KEY}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         data = response.json()
#         for player_data in data:
#             player_stats = PlayerStats(
#                 name=player_data['Name'],
#                 player_id=player_data['PlayerID'],
#                 assists=player_data['Assists'],
#                 blocks=player_data['Blocks'],
#                 faceoffs_won=player_data['FaceoffsWon'],
#                 fantasy_points=player_data['FantasyPoints'],
#                 games=player_data['Games'],
#                 hits=player_data['Hits'],
#                 minutes=player_data['Minutes'],
#                 penalty_minutes=player_data['PenaltyMinutes'],
#                 season=player_data['Season'],
#                 shots_on_goal=player_data['ShotsOnGoal'],
#                 takeaways=player_data['Takeaways'],
#                 updated=player_data['Updated']
#             )
#             db.session.add(player_stats)
#         db.session.commit()
#         return 'Data fetched and stored successfully'
#     return 'Failed to fetch data'

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, render_template
import requests
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/player_data/<player_id>')
def player_data(player_id):
    url = f'https://api.sportsdata.io/v3/nhl/scores/json/Players?key={API_KEY}'
    response = requests.get(url)
    data = response.json()

    player = next((player for player in data if player['PlayerID'] == player_id), None)
    if player is None:
        return 'Player not found', 404

    extracted_data = {
        'FirstName': player['FirstName'],
        'LastName': player['LastName'],
        'BirthCity': player['BirthCity'],
        'BirthState': player['BirthState'],
        'Jersey': player['Jersey'],
        'PlayerID': player['PlayerID'],
        'Position': player['Position'],
        'BirthDate': player['BirthDate'].split('T')[0],
        'Height': player['Height'],
        'Weight': player['Weight'],
        'InjuryStartDate': player['InjuryStartDate'].split('T')[0],
        'InjuryStatus': player['Status'],
        'Team': player['Team']
    }

    return json.dumps(extracted_data)

if __name__ == '__main__':
    app.run(debug=True)
