CREATE DATABASE heroes;

CREATE TABLE Hero (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255),
    class VARCHAR(255),
    level INT,
    created_at DATE
);

INSERT INTO Hero (name, class, level, created_at)
    VALUES ('Orym', 'Fighter', 7, '2022-10-24'), ('Launda', 'Sorcerer/Warlock', 7, '2022-12-01');

SELECT * FROM hero;