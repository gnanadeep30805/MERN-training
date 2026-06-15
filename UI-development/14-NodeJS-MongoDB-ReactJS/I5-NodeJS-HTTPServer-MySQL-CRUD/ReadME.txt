NodeJS + MySQL 

MySQL Database Setup

CREATE DATABASE node_mysql_db;
USE node_mysql_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50),
    price INT,
    category VARCHAR(50)
);


Install Required Package

npm init -y
npm install mysql2


MySQL Connection (db.js)
------------------------


API Testing

 http://localhost:8002/products

 POST
 POST http://localhost:8002/products
Body:
{
  "product_name": "Ram",
  "price": 22,
  "category": "NodeJS"
  
}

PUT http://localhost:8002/students/1
Body:
{
  "product_name": "Ravi",
  "price": 23,
  "category": "React"
}

DELETE
DELETE http://localhost:8002/students/1

Folder Structure
node-mysql/
│
├── db.js
├── server.js
├── package.json