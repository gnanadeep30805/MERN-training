const http = require('http');
http.createServer(function (req, res) {
    if (req.url == "/") {
        res.write("Hello from Home Page");
    } else if (req.url == "/about") {
        res.write("Hello from About Page");
    } else if (req.url == "/contact") {
        res.write("Hello from Contact Page");
    } else {
        res.write("404 Not Found");
    }
    res.end();
}).listen(9000, function(){
    console.log("Server is running successfully at port 9000");
});


