import csv
import json

csv_file_path = 'output_files/NHL_team_file_save.csv'
json_file_path = 'NHL_team_locations.json'

data = []

# Read CSV file and convert it to a list of dictionaries
with open(csv_file_path, 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        data.append(row)

# Write the data to a JSON file
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file, indent=4)
