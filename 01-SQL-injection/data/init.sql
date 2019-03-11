CREATE DATABASE IF NOT EXISTS test;
USE test;
CREATE TABLE IF NOT EXISTS users (
      ID int NOT NULL AUTO_INCREMENT,
      Name varchar(255) not null,
      Password varchar(255) not null,
      Address varchar(255) not null,
      PRIMARY KEY (ID)
);
INSERT INTO users (Name, Password, Address) VALUES ("Max Mustermann", "secretpasswort", "Blumenstraße Berlin");
