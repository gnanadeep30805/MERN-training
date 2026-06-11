const myhttp = require('http');

const myserver = myhttp.createServer(function(req, res) {
            res.end("Hello From Server is running ");
});
myserver.listen(9000, "127.0.0.1",   function() {
    console.log("Hello from Server is Running on Port 9000");
});