var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

module.exports = mongoose.model('Product', ProductSchema);