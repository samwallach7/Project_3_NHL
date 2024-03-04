# Project_3_NHL

-  Sam Wallach
-  Lena Hill
-  Derek Johnson
-  Elodie Mwamba

Hockey is one of the most popular sports in North America. The National Hockey League (NHL) was founded in 1917 and has experienced significant growth and transformation over the years. As a professional league develops, teams improve every facet of their organizations, from arenas and fan engagement to coaching, player acquisition and development. There is also an improvement over time in the players themselves. Professional athletes across all sports have become bigger, faster, stronger and more specialized as compared to their predecessors. In Section 1 of our project, we visualized NHL data to track the progression of the league since its inception (see bottom for recap). 

For this section of the project, we were interested in creating a webpage to supply a variety of NHL data including player statistics, draft selections and team geoplotting.

The user can interact with each page in the following manner:

Player Info
-  Select a player from the dropdown list and click submit to view their general information and season statistics. To change player, select a different name from the dropdown list and resubmit.
<img width="458" alt="Screenshot 2024-03-04 at 12 07 00 PM" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/f44f2173-4a06-486e-8bea-972f0c81a166">
<img width="158" alt="Screenshot 2024-03-04 at 12 07 15 PM" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/64a388ca-3818-4260-864a-fcae49007283">

NHL Map
- Select a desired layer to view filtered results such as active or defunct teams, conferences, Stanley Cup Titles, team franchise movement and minor league affilitates.
- The user can click on the logo of a team on the map to view additional team information. Clicking on the logo again will remove the popup box and unhighlight the team.
<img width="288" alt="Picture1" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/8bec6c6d-2495-4e25-9b95-574fa145dd60">
<img width="288" alt="Picture2" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/0f42268a-bc4c-42c8-8003-f8946ce9103d">

- On the 'Franchise Movement (NHL)' layer, the user can select one of the red lines for information about a team's move, including the year and the name change. The user can also click the team logo to see the logo jump to the move destination before returning to the original spot.
<img width="377" alt="Picture3" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/5ef0768a-158b-4eb2-9563-4313ae03928a">

Draft:
- Select a year from the dropdown list to view NHL Draft statistics such as the average age by nationality, the player count by nationality and the amount of players drafted per team for that draft year.
<img width="612" alt="Picture11" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/adbb14f6-eecc-469b-98f3-a1b7e284e7f7">
<img width="612" alt="Picture12" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/4d833dac-9c21-4b77-b6c4-c7b6d51162e6">
<img width="612" alt="Picture13" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/b8996051-9e48-4384-9b35-da043306063e">

Data Sources & Ethical Considerations

-  We chose to utilize data from a Kaggle Professional Hockey Database and a SportsDataIO API integration. This data was used as it appeared without any other manipulation. The set of files that tracked a variety of NHL statistics included: team performance, player scoring, and NHL Draft results. Eliminating any possible biases and showcasing the diversity of the player pool was an important consideration when putting together the NHL Draft page. On the NHL Map, we felt an importance in plotting all of the professional hockey teams at the higher levels of the sport and not just the NHL teams. This helps to show the access that fans in varying markets in the U.S. and Canada have to the professional game.

Database Design
-  We utilized ETL workflows to pull the data from its original source, transform the data if necessary, and the save the datasets as tables in a SQL database. We then pulled the data in from this database for use on the various pages. We chose to use a SQL database because of the ease in working with csv files, which was the majority of our data. The project's ERD is available within this repository.

New libraries used that were not covered in class
-  anime.js was used in the team geoplotting to move the team logo from one location to the other.
-  Dash & psycopg were used to load in the data for the NHL Draft section from the SQL database.

(From above) Visuals from the Section 1 Analysis:
-  Team Performance & Team Scoring
<img width="362" alt="Picture2" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/51abe909-aa11-4865-a566-95953c7bf069">
<img width="362" alt="Picture3" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/1988d037-4043-467a-9c7c-f91fd9fb2815">

-  Player Measurables & Awards
<img width="361" alt="Picture1" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/03d3a897-f8d4-4efb-90ca-6d9ce58ff315">
<img width="377" alt="Picture7" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/8de9475b-7334-415d-b986-e7ffac464b37">

-  Fan Attendance
<img width="418" alt="Picture4" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/cb6e5146-7a03-444c-8466-21925ff7fceb">

-  Country Representation in the NHL Draft
<img width="486" alt="Picture5" src="https://github.com/samwallach7/Project_3_NHL/assets/148116220/2d717a25-c5b2-4dc9-a9eb-f2387bade54b">

