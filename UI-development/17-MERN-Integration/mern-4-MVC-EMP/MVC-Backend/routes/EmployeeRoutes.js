var express = require("express");
var router = express.Router();
var controller = require("../controllers/EmployeeController");

router.get("/employees", controller.getEmployees);
router.get("/employees/:id", controller.getEmployeeById);
router.post("/employees", controller.addEmployee);
router.put("/employees/:id", controller.updateEmployee);
router.delete("/employees/:id", controller.deleteEmployee);

module.exports = router;