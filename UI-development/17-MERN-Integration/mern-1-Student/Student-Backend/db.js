var mongoose = require("mongoose");

function connectDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/studentmerndb");

    var db = mongoose.connection;

    db.on("error", function () {
        console.log("MongoDB Connection Error");
    });

    db.once("open", function () {
        console.log("MongoDB Connected");
    });
}

module.exports = connectDB;