var mongoose = require("mongoose");

function connectDB() {
    mongoose.connect("mongodb://localhost:27017/ProductDB");

    mongoose.connection.on("connected", function () {
        console.log("MongoDB Connected");
    });

    mongoose.connection.on("error", function (err) {
        console.log("MongoDB Error:", err);
    });
}

module.exports = connectDB;