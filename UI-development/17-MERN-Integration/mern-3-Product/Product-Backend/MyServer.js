var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

var productRoutes = require("./routes/product.routes");

var app = express();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use("/api/v1", productRoutes);

/* MongoDB Connection */
mongoose.connect("mongodb://127.0.0.1:27017/productdb");

mongoose.connection.on("connected", function () {
    console.log("MongoDB Connected");
});

mongoose.connection.on("error", function (err) {
    console.log("MongoDB Error:", err);
});

/* Routes */
app.use(productRoutes);

/* Server */
var PORT = 8989;
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});