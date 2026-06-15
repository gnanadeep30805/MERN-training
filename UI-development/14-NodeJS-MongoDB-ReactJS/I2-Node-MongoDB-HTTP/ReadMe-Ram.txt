HTTP Server + MongoDB

Technologies Used
Node.js (http module)
MongoDB
Mongoose

Project Structure

I2-Node-MongoDB-HTTP
│
├── server.js
├── package.json
└── mymodels/
    └── Student.js

Install Required Packages

  npm init -y
npm install mongoose  



>node MyServer.js

MongoDB Connected

Goto Postman :

Server running at http://localhost:9000

GET http://localhost:9000/students

POST Student
  http://localhost:9000/students

    {
  "name": "Shyam",
  "age": 22,
  "course": "NodeJS"
}