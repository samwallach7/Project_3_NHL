# import csv
# import json

# # csv_file_path = 'output_files/NHL_team_file_save.csv'
# # json_file_path = 'NHL_team_locations.json'

# # data = []

# # # Read CSV file and convert it to a list of dictionaries
# # with open(csv_file_path, 'r') as csv_file:
# #     csv_reader = csv.DictReader(csv_file)
# #     for row in csv_reader:
# #         data.append(row)

# # # Write the data to a JSON file
# # with open(json_file_path, 'w') as json_file:
# #     json.dump(data, json_file, indent=4)


import csv
import json

def csv_to_json(csv_file, json_file):
    # Read CSV file
    with open(csv_file, 'r', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        data = [row for row in reader]

    # Convert certain columns to numbers
    for row in data:
        row['Year'] = int(row['Year'])
        row['Lat'] = float(row['Lat'])
        row['Long'] = float(row['Long'])
        row['totalSeasons'] = int(row['totalSeasons'])
        row['pointPercent'] = float(row['pointPercent'])
        row['playoffSeasons'] = int(row['playoffSeasons'])
        row['playoffPercent'] = float(row['playoffPercent'])
        row['SCAppearances'] = int(row['SCAppearances'])
        row['StanleyCupWins'] = int(row['StanleyCupWins'])
        row['lastSeason'] = int(row['lastSeason'])

    # Write JSON file
    with open(json_file, 'w') as file:
        json.dump(data, file, indent=4)

# Example usage
csv_to_json('output_files/NHL_team_file_save.csv', 'NHL_team_locations.json')
