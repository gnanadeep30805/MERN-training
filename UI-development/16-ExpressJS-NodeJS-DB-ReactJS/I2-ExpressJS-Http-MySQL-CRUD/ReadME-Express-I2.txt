


CREATE DATABASE expstudentdb1;

USE expstudentdb1;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    course VARCHAR(50),
    age INT
);



npm init -y
npm install express mysql2

Verify installation
npm list mysql2

node MyServer.js

HOME
 
http://localhost:5000/

CREATE
http://localhost:5000/students

{
  "name": "Murali",
  "course": "NodeJS",
  "age": 25
}

READ ALL
GET http://localhost:5000/students

READ ONE
GET http://localhost:5000/students/1


UPDATE
PUT http://localhost:5000/students/1
{
  "name": "Ramesh Kumar",
  "course": "MySQL",
  "age": 23
}

DELETE
DELETE http://localhost:5000/students/1