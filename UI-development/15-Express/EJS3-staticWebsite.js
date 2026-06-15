var express = require('express');

var app = express();
// Defining route
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>ExpressJS Framework</title></head>');
    res.write('<body><h2>Hello from Express.js server!!</h2></body>');
    res.write('</html>');
    res.end();
});

// Server setup
app.listen(8000, function () {
    console.log('Server listening on port 8005');
});
