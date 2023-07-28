[Tutorial by Beaufort Tek - Youtube](https://www.youtube.com/watch?v=DihOP19LQdg&t=782s)

[Tutotrial JWT by Morgan Page](https://www.youtube.com/watch?v=foL7tbTrS9E)

# Express JS + PostgreSQL - Basics

## Setup

`npm init -y`
`npm i --save express`
`npm i -D nodemon`
`npm i pg`

Adding `"type": "module",` to package.json configs allows us to use ES5 imports.

## Postgresql commands

`psql` to open psql cli
`\conninfo` check connections info
`CREATE DATABASE heroes`
`\c heroes` connect to database

Create a table:

```
CREATE TABLE Hero (
ID SERIAL PRIMARY KEY,
name VARCHAR(255),
class VARCHAR(255),
level INT,
created_at DATE);
```

`\dt` Display table

Enter data in table:

```
INSERT INTO Hero (name, class, level, created_at)
VALUES ('Orym', 'Fighter', 7, '2022-10-24'), ('Launda', 'Sorcerer/Warlock', 7, '2022-12-01');
```

`SELECT * FROM hero;`

# JWT, cookie, session

## Setup

`npm i bcrypt cookie-parser cors dotenv jsonwebtoken`
