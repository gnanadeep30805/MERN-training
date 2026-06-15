// Requiring modules
var express = require('express');
var mongoose = require('mongoose');
var Student = require('./models/Student');

// Creating Express app
var app = express();

// Middleware to read JSON
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/expstudentdb');

mongoose.connection.on('connected', function () {
    console.log('MongoDB connected');
});

mongoose.connection.on('error', function () {
    console.log('MongoDB connection error');
});


//  ROUTES
//----------
//http://localhost:5000/
// HOME

app.get('/', function (req, res) {
    res.send('Express + MongoDB Student CRUD API');
});


// CREATE (POST)
/*
http://localhost:5000/students

{
"name": "Murali",
"course": "NodeJS",
"age": 25
} */
app.post('/students', function (req, res) {

    var student = new Student({
        name: req.body.name,
        course: req.body.course,
        age: req.body.age
    });

    student.save()
        .then(function (data) {
            res.status(201).json(data);
        })
        .catch(function () {
            res.status(500).send('Error saving student');
        });
});


// READ ALL (GET)
// http://localhost:5000/students
app.get('/students', function (req, res) {

    Student.find()
        .then(function (data) {
            res.json(data);
        })
        .catch(function () {
            res.status(500).send('Error fetching students');
        });
});



//  READ ONE (GET by ID)
//http://localhost:5000/students/6a2b6d821d2ddb24800db04e
app.get('/students/:id', function (req, res) {

    Student.findById(req.params.id)
        .then(function (data) {
            res.json(data);
        })
        .catch(function () {
            res.status(404).send('Student not found');
        });
});


// UPDATE (PUT)
/*
http://localhost:5000/students/6a2c2fefe27812b2c413ac91
{
  "name": "Ramesh Kumar",
  "course": "MongoDB",
  "age": 23
}

*/
app.put('/students/:id', function (req, res) {

    Student.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            course: req.body.course,
            age: req.body.age
        },
        { new: true }
    )
        .then(function (data) {
            res.json(data);
        })
        .catch(function () {
            res.status(500).send('Error updating student');
        });
});


// DELETE
//http://localhost:5000/students/6a2c2fefe27812b2c413ac91
app.delete('/students/:id', function (req, res) {

    Student.findByIdAndDelete(req.params.id)
        .then(function () {
            res.send('Student deleted');
        })
        .catch(function () {
            res.status(500).send('Error deleting student');
        });
});


//  SERVER

app.listen(5000, function () {
    console.log('Server running on port 5000');
});