var http = require("http");
var mongoose = require("mongoose");
var Student = require("./mymodels/Student");

// MongoDB Connection
/*
mongoose.connect("mongodb://127.0.0.1:27017/myhttpdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err)); */
mongoose.connect("mongodb://127.0.0.1:27017/myhttpdb1")
    .then(function () {
        console.log("MongoDB Connected");
    })
    .catch(function (err) {
        console.log(err);
    });

// HTTP Server
var server = http.createServer(function (req, res) {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Student API : NSRIT");
    }

    else if (req.method === "GET" && req.url === "/students") {
        Student.find().then(function (students) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(students));
        });
    }

    else if (req.method === "POST" && req.url === "/students") {
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            var data = JSON.parse(body);

            var student = new Student(data);
            student.save().then(function () {
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "Student Saved",
                    student: student
                }));
            });
        });
    }

    else {
        res.writeHead(404);
        res.end("Route Not Found");
    }
});

server.listen(9000, function () {
    console.log("Server running at http://localhost:9000");
});