//CRUD SERVER (HTTP + MongoDB)


var http = require("http");
var mongoose = require("mongoose");
var url = require("url");
var Student = require("./mymodels/Student");

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/myhttpdb3")
    .then(function () {
        console.log("MongoDB Connected");
    })
    .catch(function (err) {
        console.log(err);
    });

// Create HTTP Server
var server = http.createServer(function (req, res) {

    var parsedUrl = url.parse(req.url, true);
    var id = parsedUrl.query.id;
    http://localhost:6003
    // ===== ROOT =====
    if (req.method === "GET" && parsedUrl.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Student API : NSRIT");
    }
    //http://localhost:6003/students
    //  READ (GET ALL)  
    else if (req.method === "GET" && parsedUrl.pathname === "/students") {
        Student.find().then(function (students) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(students));
        });
    }

    // CREATE (POST) 
    else if (req.method === "POST" && parsedUrl.pathname === "/students") {
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

    //http://localhost:6003/students/6a2aa1a3129b5636d21afdd1
    //  UPDATE STUDENT 
    else if (req.method === "PUT" && req.url.startsWith("/students/")) {

        var id = req.url.split("/")[2]; // get ID from URL
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            var data = JSON.parse(body);

            Student.findByIdAndUpdate(
                id,
                data,
                { new: true }
            )
                .then(function (updatedStudent) {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({
                        message: "Student Updated",
                        student: updatedStudent
                    }));
                })
                .catch(function (err) {
                    res.writeHead(500);
                    res.end(JSON.stringify(err));
                });
        });
    }
    // DELETE 
    else if (req.method === "DELETE" && parsedUrl.pathname === "/students") {
        Student.findByIdAndDelete(id).then(function () {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Student Deleted"
            }));
        });
    }

    // ===== INVALID ROUTE =====
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route Not Found");
    }
});

// Start Server
server.listen(6003, function () {
    console.log("Server running at http://localhost:6003");
});