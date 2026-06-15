var db = require('../db');   // IMPORTANT: ../db

var Product = {};

// CREATE
Product.create = function (data, callback) {
    data = data || {};
    var sql = "INSERT INTO products (name, price) VALUES (?, ?)";
    db.query(sql, [data.name, data.price], callback);
};

// READ ALL
Product.findAll = function (callback) {
    var sql = "SELECT * FROM products";
    db.query(sql, callback);
};

// READ ONE
Product.findById = function (id, callback) {
    var sql = "SELECT * FROM products WHERE id = ?";
    db.query(sql, [id], callback);
};

// UPDATE
Product.update = function (id, data, callback) {
    data = data || {};
    var sql = "UPDATE products SET name=?, price=? WHERE id=?";
    db.query(sql, [data.name, data.price, id], callback);
};

// DELETE
Product.delete = function (id, callback) {
    var sql = "DELETE FROM products WHERE id=?";
    db.query(sql, [id], callback);
};

module.exports = Product;