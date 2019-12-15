/* Create a database */
CREATE DATABASE realityTvFantasy;
USE realityTvFantasy;

/* Create a table */
CREATE TABLE picks (
	id				INT,
	usr 			VARCHAR(250),
	`show`			VARCHAR(250),
	pick 			VARCHAR(250),
	PRIMARY KEY 	(id)
);


/* Describe the table */
DESCRIBE picks;
