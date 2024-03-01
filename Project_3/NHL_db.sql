CREATE TABLE "Teams" (
  "TeamID" serial PRIMARY KEY,
  "Name" varchar,
  "Location" varchar,
  "Stadium_ID" int,
  "Year" int,
  "LeagueID" varchar,
  "ConferenceID" int,
  "DivisionID" int,
  "Rank" int
);

CREATE TABLE "Players" (
  "PlayerID" varchar PRIMARY KEY,
  "TeamID" int,
  "Name" varchar,
  "Position" varchar,
  "Birthdate" date,
  FOREIGN KEY ("TeamID") REFERENCES "Teams" ("TeamID")
);

CREATE TABLE "PlayerTeams" (
  "PlayerID" varchar,
  "TeamID" int,
  PRIMARY KEY ("PlayerID", "TeamID"),
  FOREIGN KEY ("PlayerID") REFERENCES "Players" ("PlayerID"),
  FOREIGN KEY ("TeamID") REFERENCES "Teams" ("TeamID")
);

CREATE TABLE "Stadiums" (
  "StadiumID" serial PRIMARY KEY,
  "Name" varchar,
  "Location" varchar,
  "Active" bool,
  "Capacity" int,
  "Latitude" float,
  "Longitude" float
);

CREATE TABLE "League_Averages" (
  "Rank" int PRIMARY KEY,
  "Season" varchar,
  "LeagueID" varchar,
  "GP" int,
  "G" float,
  "PP" int,
  "PPP" float,
  "PKP" float,
  "SA" float,
  "SV" float,
  "SVP" float,
  "GAA" float
);

CREATE TABLE "Awards" (
  "PlayerID" varchar PRIMARY KEY,
  "Award" varchar,
  "Year" int
);

CREATE TABLE "Goalies" (
  "PlayerID" varchar PRIMARY KEY,
  "Year" int,
  "TmID" varchar UNIQUE,
  "LeagueID" varchar,
  "GP" int,
  "Min" int,
  "W" int,
  "L" int
);

-- Drop the existing foreign key constraint in the Teams table (if it exists)
ALTER TABLE "Teams" DROP CONSTRAINT IF EXISTS "Teams_TeamID_fkey";

-- Add foreign key constraints
ALTER TABLE "Players" ADD FOREIGN KEY ("PlayerID") REFERENCES "Awards" ("PlayerID");

-- Add colums to Awards table
ALTER TABLE "Awards" ADD COLUMN "Position" varchar;
ALTER TABLE "Awards" ADD COLUMN "LeagueID" varchar;

-- Add a unique constraint to awards
ALTER TABLE "Awards" ADD CONSTRAINT "unique_award_per_player_per_year" UNIQUE ("PlayerID", "Year", "Award");
