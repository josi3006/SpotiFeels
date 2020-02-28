-- ### Schema
-- CREATE DATABASE quotes_db;
-- USE quotes_db;

-- CREATE TABLE quotes
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	author varchar(255) NOT NULL,
-- 	quote TEXT NOT NULL,
-- 	PRIMARY KEY (id)
-- );

 

 use tamedb;
 create table comment
 (
	 id int not null  auto_increment,
	 name varchar(255) not null,
	 songtitle varchar(255) not null,
	 comment text null,
	 primary key (id)
 )