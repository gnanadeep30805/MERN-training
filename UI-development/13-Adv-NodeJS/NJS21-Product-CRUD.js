var http = require("http");
var url = require("url");

// In-memory data (acts like database)
var products = [
    { productId: 101, productName: "Laptop", productPrice: 55000 },
    { productId: 102, productName: "Mobile", productPrice: 25000 }
];

var server = http.createServer(function (req, res) {

    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var method = req.method;

    // ===== GET ALL PRODUCTS =====
    if (method === "GET" && path === "/products") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
    }

    // ===== GET PRODUCT BY ID =====
    else if (method === "GET" && path.startsWith("/products/")) {

        var id = parseInt(path.split("/")[2]);

        var product = products.find(function (p) {
            return p.productId === id;
        });

        if (product) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(product));
        }
        else {
            res.writeHead(404);
            res.end("Product Not Found");
        }
    }

    // ===== ADD PRODUCT =====
    else if (method === "POST" && path === "/products") {

        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {

            var newProduct = JSON.parse(body);

            products.push(newProduct);

            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Product Added",
                product: newProduct
            }));
        });
    }

    // ===== UPDATE PRODUCT =====
    else if (method === "PUT" && path.startsWith("/products/")) {

        var id = parseInt(path.split("/")[2]);
        var body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {

            var updatedData = JSON.parse(body);

            var index = products.findIndex(function (p) {
                return p.productId === id;
            });

            if (index !== -1) {

                products[index] = updatedData;

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "Product Updated",
                    product: updatedData
                }));
            }
            else {
                res.writeHead(404);
                res.end("Product Not Found");
            }
        });
    }

    // ===== DELETE PRODUCT =====
    else if (method === "DELETE" && path.startsWith("/products/")) {

        var id = parseInt(path.split("/")[2]);

        products = products.filter(function (p) {
            return p.productId !== id;
        });

        res.writeHead(200);
        res.end("Product Deleted");
    }

    // ===== INVALID ROUTE =====
    else {
        res.writeHead(404);
        res.end("Route Not Found : NSRIT");
    }
});

server.listen(6002, function () {
    console.log("Server running at http://localhost:6002");
});