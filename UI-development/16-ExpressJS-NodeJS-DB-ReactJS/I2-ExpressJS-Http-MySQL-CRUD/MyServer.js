var express = require('express');
var Student = require('./models/Student'); // correct path

var app = express();
app.use(express.json());

/*
HOME
http://localhost:5000/
*/
app.get('/', function (req, res) {
    res.send('Express + MySQL Student CRUD API');
});

/*
CREATE
POST http://localhost:5000/students
{
  "name": "Murali",
  "course": "NodeJS",
  "age": 25
}
*/
app.post('/students', function (req, res) {

    Student.create(req.body, function (err, result) {
        if (err) {
            res.status(500).send('Error inserting student');
        } else {
            res.status(201).json({ id: result.insertId });
        }
    });
});

/*
READ ALL
GET http://localhost:5000/students
*/
app.get('/students', function (req, res) {

    Student.findAll(function (err, rows) {
        if (err) {
            res.status(500).send('Error fetching students');
        } else {
            res.json(rows);
        }
    });
});

/*
READ ONE
GET http://localhost:5000/students/1
*/
app.get('/students/:id', function (req, res) {

    Student.findById(req.params.id, function (err, rows) {
        if (err || rows.length === 0) {
            res.status(404).send('Student not found');
        } else {
            res.json(rows[0]);
        }
    });
});

/*
UPDATE
PUT http://localhost:5000/students/1
{
  "name": "Ramesh Kumar",
  "course": "MySQL",
  "age": 23
}
*/
app.put('/students/:id', function (req, res) {

    Student.update(req.params.id, req.body, function (err) {
        if (err) {
            res.status(500).send('Error updating student');
        } else {
            res.send('Student updated');
        }
    });
});

/*
DELETE
DELETE http://localhost:5000/students/1
*/
app.delete('/students/:id', function (req, res) {

    Student.delete(req.params.id, function (err) {
        if (err) {
            res.status(500).send('Error deleting student');
        } else {
            res.send('Student deleted');
        }
    });
});

app.listen(5000, function () {
    console.log('Server running on port 5000');
});