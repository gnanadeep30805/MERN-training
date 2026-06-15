


CREATE DATABASE expproductdb1;

USE expproductdb1;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    price INT
);



npm init -y
npm install express mysql2

Verify installation
npm list mysql2

node MyServer.js

HOME
 
http://localhost:5000/

CREATE
http://localhost:5000/products

{
  "name": "Apple",
  "price": 100
}

READ ALL
GET http://localhost:5000/products

READ ONE
GET http://localhost:5000/products/1


UPDATE
PUT http://localhost:5000/products/1
{
  "name": "Milk",
  "price": 30
}

DELETE
DELETE http://localhost:5000/products/1