var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    productname: String,
    productprice: Number,
    productstock: Number
});

module.exports = mongoose.model("Product", ProductSchema);