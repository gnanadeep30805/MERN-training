NodeJS + MySQL 

MySQL Database Setup

CREATE DATABASE node_mysql_db;
USE node_mysql_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    course VARCHAR(50)
);


Install Required Package

npm init -y
npm install mysql2


MySQL Connection (db.js)
------------------------


API Testing

 http://localhost:8000/students

 POST
 POST http://localhost:8000/students
Body:
{
  "name": "Ram",
  "age": 22,
  "course": "NodeJS"
}

PUT http://localhost:8000/students/1
Body:
{
  "name": "Ravi",
  "age": 23,
  "course": "React"
}

DELETE
DELETE http://localhost:8000/students/1

Folder Structure
node-mysql/
│
├── db.js
├── server.js
├── package.json