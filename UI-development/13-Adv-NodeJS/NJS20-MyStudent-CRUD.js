var http = require("http");
var url = require("url");

// In-memory data (acts like database)
var students = [
    { id: 1, name: "Ram", course: "Java" },
    { id: 2, name: "Mohan", course: "NodeJS" }
];

var server = http.createServer(function (req, res) {

    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var method = req.method;

    // ===== GET ALL STUDENTS =====
    if (method === "GET" && path === "/students") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(students)); 
    }

    // ===== GET STUDENT BY ID =====
    else if (method === "GET" && path.startsWith("/students/")) {
        var id = parseInt(path.split("/")[2]);
        var student = students.find(function (s) {
            return s.id === id;
        });

        if (student) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404);
            res.end("Student Not Found");
        }
    }

    // ===== ADD STUDENT =====
    else if (method === "POST" && path === "/students") {
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            var newStudent = JSON.parse(body);
            students.push(newStudent);

            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Student Added",
                student: newStudent
            }));
        });
    }

    // ===== UPDATE STUDENT =====
    else if (method === "PUT" && path.startsWith("/students/")) {
        var id = parseInt(path.split("/")[2]);
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            var updatedData = JSON.parse(body);
            var index = students.findIndex(function (s) {
                return s.id === id;
            });

            if (index !== -1) {
                students[index] = updatedData;
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "Student Updated",
                    student: updatedData
                }));
            } else {
                res.writeHead(404);
                res.end("Student Not Found");
            }
        });
    }

    // ===== DELETE STUDENT =====
    else if (method === "DELETE" && path.startsWith("/students/")) {
        var id = parseInt(path.split("/")[2]);
        students = students.filter(function (s) {
            return s.id !== id;
        });

        res.writeHead(200);
        res.end("Student Deleted");
    }

    // ===== INVALID ROUTE =====
    else {
        res.writeHead(404);
        res.end("Route Not Found  : NSRIT");
    }
});

server.listen(6001, function () {
    console.log("Server running at http://localhost:6001");
});

//GET all students
//GET
//  http://localhost:6001/students
//POST (Add Student)

// http://localhost:6001/students
//Body → raw → JSON
/*
{
  "id": 3,
  "name": "Lakshman",
  "course": "Aanjular"
}
PUT (Update Student)
http://localhost:6001/students/3

{
  "id": 3,
  "name": "Lakshman",
  "course": "Angular"
}

DELETE 
   http://localhost:6001/students/3

      //Student Deleted
*/