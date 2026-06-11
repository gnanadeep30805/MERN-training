const EventEmitter = require("events");
const event = new EventEmitter();
event.on("add", function(a,b) {
    console.log("Sum:", a + b);
});
event.emit("add",10,5);
