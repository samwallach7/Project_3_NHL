-- Create Teams table
CREATE TABLE IF NOT EXISTS "Teams" (
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

-- Create Players table
CREATE TABLE IF NOT EXISTS "Players" (
  "PlayerID" varchar PRIMARY KEY,
  "TeamID" int,
  "Name" varchar,
  "Position" varchar,
  "Birthdate" date,
  FOREIGN KEY ("TeamID") REFERENCES "Teams" ("TeamID")
);

-- Create PlayerTeams table
CREATE TABLE IF NOT EXISTS "PlayerTeams" (
  "PlayerID" varchar,
  "TeamID" int,
  PRIMARY KEY ("PlayerID", "TeamID"),
  FOREIGN KEY ("PlayerID") REFERENCES "Players" ("PlayerID"),
  FOREIGN KEY ("TeamID") REFERENCES "Teams" ("TeamID")
);

-- Create Stadiums table
CREATE TABLE IF NOT EXISTS "Stadiums" (
  "StadiumID" serial PRIMARY KEY,
  "Name" varchar,
  "Location" varchar,
  "Active" bool,
  "Capacity" int,
  "Latitude" float,
  "Longitude" float
);

-- Create League_Averages table
CREATE TABLE IF NOT EXISTS "League_Averages" (
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

-- Create Awards table
CREATE TABLE IF NOT EXISTS "Awards" (
  "UniqueID" SERIAL PRIMARY KEY,
  "PlayerID" varchar,
  "Award" varchar,
  "Year" int,
  "lgID" varchar,
  "pos" varchar
);

-- Create Goalies table
CREATE TABLE IF NOT EXISTS "Goalies" (
  "PlayerID" varchar PRIMARY KEY,
  "Year" int,
  "TmID" varchar UNIQUE,
  "LeagueID" varchar,
  "GP" int,
  "Min" int,
  "W" int,
  "L" int
);

-- Add column to Awards table
ALTER TABLE IF EXISTS "Awards" ADD COLUMN IF NOT EXISTS "LeagueID" varchar;

-- Drop existing foreign key constraint in Players table
ALTER TABLE IF EXISTS "Players" DROP CONSTRAINT IF EXISTS "Players_PlayerID_fkey" CASCADE;

-- Drop existing primary key constraint in Awards table
ALTER TABLE IF EXISTS "Awards" DROP CONSTRAINT IF EXISTS "Awards_pkey";

-- Remove unique constraint on PlayerID, Year, and Award in Awards table
ALTER TABLE IF EXISTS "Awards" DROP CONSTRAINT IF EXISTS "unique_award_per_player_per_year";

-- Add UniqueID column to Awards table
ALTER TABLE IF EXISTS "Awards" ADD COLUMN IF NOT EXISTS "UniqueID" SERIAL;

-- Make UniqueID the primary key
ALTER TABLE IF EXISTS "Awards" ADD PRIMARY KEY ("UniqueID");


-- Remake the Awards table
-- Drop the existing "Awards" table if needed
DROP TABLE IF EXISTS "Awards";

-- Recreate the "Awards" table with columns in the desired order
CREATE TABLE "Awards" (
  "UniqueID" SERIAL PRIMARY KEY,
  "playerID" VARCHAR,
  "award" VARCHAR,
  "year" INT,
  "lgID" VARCHAR,
  "pos" VARCHAR
);


SELECT EXISTS (
    SELECT 1
    FROM information_schema.tables
    WHERE table_name = 'Awards'
);

SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'Awards';

SELECT sequence_name 
FROM information_schema.sequences 
WHERE sequence_schema = 'public' AND sequence_name LIKE 'awards_uniqueid_seq';

SELECT sequence_name 
FROM information_schema.sequences 
WHERE sequence_schema = 'public' AND sequence_name = 'name';

-- Find the maximum UniqueID
SELECT MAX("UniqueID") + 1 FROM public."Awards";
