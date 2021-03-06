DROP DATABASE IF EXISTS bamfmovies_db;
CREATE DATABASE BAMFmovies_db;
USE bamfmovies_db;
CREATE TABLE users(
    username VARCHAR(30) NOT NULL,
    PASSWORD VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    first_name VARCHAR (25) NOT NULL,
    last_name VARCHAR (25) NOT NULL
    /* AUTO GENERATED BY SEQUELIZE
    ID as PRIMARY KEY
    Created at time 
    Updated at time
    */
);

CREATE TABLE user_movies(
    -- Movie ID will be pulled from api... looks like all movie apis use IMDB title ID
    imdb_ID VARCHAR(15),
    title VARCHAR(50),
    plot VARCHAR(300),
    -- FOREIGN KEY to join users to the movie list
    FOREIGN KEY (id) REFERENCES users(id),
    watched BOOLEAN
    /* AUTO GENERATED BY SEQUELIZE
    ID as PRIMARY KEY 
    Created at time 
    Updated at time
    */
);

