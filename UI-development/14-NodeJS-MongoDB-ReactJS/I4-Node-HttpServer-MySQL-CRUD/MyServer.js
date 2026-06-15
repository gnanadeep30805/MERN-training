 var http = require("http");
var db = require("./db");

var server = http.createServer(function (req, res) {

    /* ROOT */
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to NodeJS + MySQL API");
    }

    /* GET ALL STUDENTS */
    else if (req.method === "GET" && req.url === "/students") {
        db.query("SELECT * FROM students", function (err, result) {
            if (err) {
                res.writeHead(500);
                res.end("DB Error");
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(result));
            }
        });
    }

    /* POST STUDENT */
    else if (req.method === "POST" && req.url === "/students") {
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            var data = JSON.parse(body);
            var sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";

            db.query(sql, [data.name, data.age, data.course], function (err) {
                if (err) {
                    res.writeHead(500);
                    res.end("Insert Failed");
                } else {
                    res.writeHead(201);
                    res.end("Student Inserted");
                }
            });
        });
    }

    /* PUT STUDENT */
    else if (req.method === "PUT" && req.url.startsWith("/students/")) {
        var id = req.url.split("/")[2];
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            var data = JSON.parse(body);
            var sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";

            db.query(sql, [data.name, data.age, data.course, id], function (err) {
                if (err) {
                    res.writeHead(500);
                    res.end("Update Failed");
                } else {
                    res.end("Student Updated");
                }
            });
        });
    }

    /* DELETE STUDENT */
    else if (req.method === "DELETE" && req.url.startsWith("/students/")) {
        var id = req.url.split("/")[2];
        var sql = "DELETE FROM students WHERE id=?";

        db.query(sql, [id], function (err) {
            if (err) {
                res.writeHead(500);
                res.end("Delete Failed");
            } else {
                res.end("Student Deleted");
            }
        });
    }

    /* INVALID ROUTE */
    else {
        res.writeHead(404);
        res.end("Route Not Found");
    }
});

server.listen(8000, function () {
    console.log("Server running at http://localhost:8000");
});