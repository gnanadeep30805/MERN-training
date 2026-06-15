var http = require('http');

var dt = require('./myModule.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(9000, function(){
    console.log("Server is running successfully at port 9000");
});