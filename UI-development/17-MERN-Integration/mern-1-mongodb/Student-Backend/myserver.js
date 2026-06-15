var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var Student = require("./models/Student");

var app = express();
var PORT = 5000;

app.use(cors());
app.use(express.json());

/* MongoDB Connection */
mongoose.connect("mongodb://127.0.0.1:27017/studentmerndb")
.then(function () {
    console.log("MongoDB Connected");
})
.catch(function () {
    console.log("MongoDB Connection Failed");
});

/* Home API */
app.get("/", function (req, res) {
    res.send("Student API Running");
});

/* ADD STUDENT */
app.post("/students", function (req, res) {

    var student = new Student({
        name: req.body.name,
        course: req.body.course,
        age: req.body.age
    });

    student.save()
    .then(function () {
        res.send("Student Added Successfully");
    })
    .catch(function () {
        res.status(500).send("Error saving student");
    });
});

/* GET ALL STUDENTS */
app.get("/students", function (req, res) {

    Student.find()
    .then(function (students) {
        res.json(students);
    })
    .catch(function () {
        res.status(500).send("Error fetching students");
    });
});

app.listen(PORT, function () {
    console.log("Node Server running on port : NSRIT " + PORT);
});