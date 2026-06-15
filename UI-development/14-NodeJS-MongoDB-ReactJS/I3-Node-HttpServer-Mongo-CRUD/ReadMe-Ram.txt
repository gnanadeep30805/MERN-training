
I3-Node-HttpServer-Mongo-CRUD
│
├── server.js
├── package.json
└── mymodels/
    └── Student.js

npm init -y
npm install mongoose  

>node MyServer.js



http://localhost:9000

GET http://localhost:9000/students

POST Student
  http://localhost:9000/students

    {
  "name": "Ram",
  "age": 22,
  "course": "NodeJS"
}

UPDATE (PUT)
PUT 
 http://localhost:9000/students/6a2aa1a3129b5636d21afdd1

{
  "name": "Welcome",
  "age": 22,
  "course": "NodeJS"
}

DELETE

http://localhost:9000/students?id=6a2aa1b0129b5636d21afdd2 

mongosh
     use myhttpdb
     db.students.find().pretty()

Client (Postman)
     |
HTTP Module
     |
CRUD Routes
     |
Mongoose Model
     |
MongoDB


