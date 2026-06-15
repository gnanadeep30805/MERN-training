
var express = require('express');

// Creating express app
var app = express();

// Middleware to serve static files
app.use(express.static('public'));

// Server setup
app.listen(4005, function () {
    console.log('Server running on port 4005');
});
