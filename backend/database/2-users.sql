-- Create reader group
CREATE ROLE readaccess LOGIN;
GRANT USAGE ON SCHEMA care_package TO readaccess;
ALTER DEFAULT PRIVILEGES IN SCHEMA care_package GRANT SELECT ON TABLES TO readaccess;

-- Create Writer Group
CREATE ROLE writeaccess LOGIN;
GRANT USAGE ON SCHEMA care_package TO writeaccess;
ALTER DEFAULT PRIVILEGES IN SCHEMA care_package GRANT SELECT, INSERT, UPDATE ON TABLES TO writeaccess;

-- Create Deletion Group
CREATE ROLE deleteaccess LOGIN;
GRANT USAGE ON SCHEMA care_package TO deleteaccess;
ALTER DEFAULT PRIVILEGES IN SCHEMA care_package GRANT SELECT, DELETE ON TABLES TO deleteaccess;

-- care_package reader
DROP USER IF EXISTS care_package_reader;
CREATE USER care_package_reader WITH PASSWORD 'reader123';
GRANT readaccess TO care_package_reader;

-- care_package writer
DROP USER IF EXISTS care_package_writer;
CREATE USER care_package_writer WITH PASSWORD 'writer123';
GRANT writeaccess TO care_package_writer;

-- care_package remover
DROP USER IF EXISTS care_package_remover;
CREATE USER care_package_remover WITH PASSWORD 'remover123';
GRANT deleteaccess TO care_package_remover;