var db = require('../db');   // IMPORTANT: ../db

var Student = {};

// CREATE
Student.create = function (data, callback) {
    var sql = "INSERT INTO students (name, course, age) VALUES (?, ?, ?)";
    db.query(sql, [data.name, data.course, data.age], callback);
};

// READ ALL
Student.findAll = function (callback) {
    var sql = "SELECT * FROM students";
    db.query(sql, callback);
};

// READ ONE
Student.findById = function (id, callback) {
    var sql = "SELECT * FROM students WHERE id = ?";
    db.query(sql, [id], callback);
};

// UPDATE
Student.update = function (id, data, callback) {
    var sql = "UPDATE students SET name=?, course=?, age=? WHERE id=?";
    db.query(sql, [data.name, data.course, data.age, id], callback);
};

// DELETE
Student.delete = function (id, callback) {
    var sql = "DELETE FROM students WHERE id=?";
    db.query(sql, [id], callback);
};

module.exports = Student;