var express = require("express");
var router = express.Router();
var Employee = require("../models/Employee");

/* GET ALL EMPLOYEES */
router.get("/employees", function (req, res) {
    Employee.find()
        .then(function (employees) {
            res.json(employees);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

/* GET EMPLOYEE BY ID */
router.get("/employees/:id", function (req, res) {
    Employee.findById(req.params.id)
        .then(function (employee) {
            res.json(employee);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

/* CREATE EMPLOYEE */
router.post("/employees", function (req, res) {
    var emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        salary: req.body.salary,
        department: req.body.department
    });
    emp.save()
        .then(function (employee) {
            res.json(employee);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

/* UPDATE EMPLOYEE */
router.put("/employees/:id", function (req, res) {
    Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(function (employee) {
            res.json(employee);
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

/* DELETE EMPLOYEE */
router.delete("/employees/:id", function (req, res) {
    Employee.findByIdAndDelete(req.params.id)
        .then(function () {
            res.json({ message: "Employee deleted" });
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

module.exports = router;