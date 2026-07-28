var db = require("../config/db");

var Employee = {

    getAll: function (callback) {
        db.query("SELECT * FROM employees", callback);
    },

    getById: function (id, callback) {
        db.query("SELECT * FROM employees WHERE id=?", [id], callback);
    },

    create: function (data, callback) {
        db.query(
            "INSERT INTO employees (name, salary) VALUES (?, ?)",
            [data.name, data.salary],
            callback
        );
    },

    update: function (id, data, callback) {
        db.query(
            "UPDATE employees SET name=?, salary=? WHERE id=?",
            [data.name, data.salary, id],
            callback
        );
    },

    delete: function (id, callback) {
        db.query("DELETE FROM employees WHERE id=?", [id], callback);
    }
};

module.exports = Employee;