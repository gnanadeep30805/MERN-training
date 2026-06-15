var http = require("http");
var db = require("./db");

var server = http.createServer(function (req, res) {

    /* ROOT */
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to NodeJS + MySQL API");
    }

    /* GET ALL PRODUCTS */
    else if (req.method === "GET" && req.url === "/products") {
        db.query("SELECT * FROM products", function (err, result) {
            if (err) {
                res.writeHead(500);
                res.end("DB Error");
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(result));
            }
        });
    }

    /* POST PRODUCTS */
    else if (req.method === "POST" && req.url === "/products") {
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            var data = JSON.parse(body);
            var sql = "INSERT INTO products (name, price, category) VALUES (?, ?, ?)";

            db.query(sql, [data.name, data.price, data.category], function (err) {
                if (err) {
                    res.writeHead(500);
                    res.end("Insert Failed");
                } else {
                    res.writeHead(201);
                    res.end("Product Inserted");
                }
            });
        });
    }

    /* PUT PRODUCT */
    else if (req.method === "PUT" && req.url.startsWith("/products/")) {
        var id = req.url.split("/")[2];
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            var data = JSON.parse(body);
            var sql = "UPDATE products SET name=?, price=?, category=? WHERE id=?";

            db.query(sql, [data.name, data.price, data.category, id], function (err) {
                if (err) {
                    res.writeHead(500);
                    res.end("Update Failed");
                } else {
                    res.end("Product Updated");
                }
            });
        });
    }

    /* DELETE PRODUCTS */
    else if (req.method === "DELETE" && req.url.startsWith("/products/")) {
        var id = req.url.split("/")[2];
        var sql = "DELETE FROM products WHERE id=?";

        db.query(sql, [id], function (err) {
            if (err) {
                res.writeHead(500);
                res.end("Delete Failed");
            } else {
                res.end("Product Deleted");
            }
        });
    }

    /* INVALID ROUTE */
    else {
        res.writeHead(404);
        res.end("Route Not Found");
    }
});

server.listen(8002, function () {
    console.log("Server running at http://localhost:8002");
});