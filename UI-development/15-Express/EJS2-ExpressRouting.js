var express = require("express")
var app = express()
var port = 8005

//default route
app.get('/', function (req, res) {
    res.send("hello express")
})

app.get('/student', function (req, res) {
    res.send("welcome to student page")
})

app.get('/faculty', function (req, res) {
    res.send("welcome to faculty page")
})

app.get('/admin', function (req, res) {
    res.send("welcome to admin page")
})

app.listen(port, function () {
    console.log(`server started on port ${port}`)
})