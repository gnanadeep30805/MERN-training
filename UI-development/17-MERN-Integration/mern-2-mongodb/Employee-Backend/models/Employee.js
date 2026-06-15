var mongoose = require("mongoose");

var EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String
});

module.exports = mongoose.model("Employee", EmployeeSchema);