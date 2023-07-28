CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE DATABASE heroes;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users (username, email, password) VALUES ('Matt', 'matt@test.com', 'password');
INSERT INTO users (username, email, password) VALUES ('Sam', 'sam@test.com', 'password');


ALTER TABLE users ALTER COLUMN email SET NOT NULL;
ALTER TABLE users ADD CONSTRAINT email UNIQUE (email);