var Employee = require("../models/EmployeeModel");

exports.getEmployees = function (req, res) {
    Employee.getAll(function (err, result) {
        if (err) res.status(500).send(err);
        else res.json(result);
    });
};

exports.getEmployeeById = function (req, res) {
    Employee.getById(req.params.id, function (err, result) {
        if (err) res.status(500).send(err);
        else res.json(result);
    });
};

exports.addEmployee = function (req, res) {
    Employee.create(req.body, function (err) {
        if (err) res.status(500).send(err);
        else res.send("Employee Added");
    });
};

exports.updateEmployee = function (req, res) {
    Employee.update(req.params.id, req.body, function (err) {
        if (err) res.status(500).send(err);
        else res.send("Employee Updated");
    });
};

exports.deleteEmployee = function (req, res) {
    Employee.delete(req.params.id, function (err) {
        if (err) res.status(500).send(err);
        else res.send("Employee Deleted");
    });
};