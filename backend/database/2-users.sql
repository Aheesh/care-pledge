-- Create reader group
CREATE ROLE readaccess LOGIN;
GRANT USAGE ON SCHEMA care_pledge TO readaccess;
ALTER DEFAULT PRIVILEGES IN SCHEMA care_pledge GRANT SELECT ON TABLES TO readaccess;

-- Create Writer Group
CREATE ROLE writeaccess LOGIN;
GRANT USAGE ON SCHEMA care_pledge TO writeaccess;
ALTER DEFAULT PRIVILEGES IN SCHEMA care_pledge GRANT SELECT, INSERT, UPDATE ON TABLES TO writeaccess;

-- Create Deletion Group
CREATE ROLE deleteaccess LOGIN;
GRANT USAGE ON SCHEMA care_pledge TO deleteaccess;
ALTER DEFAULT PRIVILEGES IN SCHEMA care_pledge GRANT SELECT, DELETE ON TABLES TO deleteaccess;

-- care_pledge reader
DROP USER IF EXISTS care_pledge_reader;
CREATE USER care_pledge_reader WITH PASSWORD 'reader123';
GRANT readaccess TO care_pledge_reader;

-- care_pledge writer
DROP USER IF EXISTS care_pledge_writer;
CREATE USER care_pledge_writer WITH PASSWORD 'writer123';
GRANT writeaccess TO care_pledge_writer;

-- care_pledge remover
DROP USER IF EXISTS care_pledge_remover;
CREATE USER care_pledge_remover WITH PASSWORD 'remover123';
GRANT deleteaccess TO care_pledge_remover;