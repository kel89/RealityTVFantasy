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

CREATE TABLE users (
	id			INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_name	VARCHAR(255)
);


/* Describe the table */
DESCRIBE picks;
