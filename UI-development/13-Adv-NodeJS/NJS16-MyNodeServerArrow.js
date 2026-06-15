
const myhttp = require('http');
const myserver = myhttp.createServer((req, res) => {
    res.end("Hello From Server is running ");
});
myserver.listen(9000, "127.0.0.1", () => {
    console.log("Hello from Server is Running on Port 9000");
});