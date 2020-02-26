Create database tamedb
USE tamedb;

CREATE TABLE tameimpala
(
	id int NOT NULL AUTO_INCREMENT,
	artist_name varchar(30) NOT NULL,
    album_name VARCHAR(30) NOT NULL,
    song_name VARCHAR(60) NOT NULL, 
	mood_id int NOT NULL,
    PRIMARY KEY (id)
);