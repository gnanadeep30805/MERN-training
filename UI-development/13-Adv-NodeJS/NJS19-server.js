// server.js
const http = require("http");
const studentsData = require("./studentsData");

const server = http.createServer(function (req, res) {

    // HOME PAGE
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to Student Management App</h1>");
        res.end();
    }

    // GET STUDENTS
    else if (req.url === "/students" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(studentsData.getStudents()));
    }

    // ADD STUDENT (POST)
    else if (req.url === "/add-student" && req.method === "POST") {
        let body = "";

        req.on("data", function (chunk) {
            //body += chunk; 
            body = body + chunk;
        });

        req.on("end", function () {
            const newStudent = JSON.parse(body);
            studentsData.addStudent(newStudent);

            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Student Added Successfully" }));
        });
    }

    // NOT FOUND
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Your Requested Page Not Found : NSRIT");
    }

});

server.listen(5000, function () {
    console.log("Server running at http://localhost:5000");
});

/*
node server.js

http://localhost:5000/
http://localhost:5000/students
// POST    (Postman - Post ,Body , raw ,JSON)
// http://localhost:5000/add-student  

   {
  "id": 1,
  "name": "Kiran"
}
*/