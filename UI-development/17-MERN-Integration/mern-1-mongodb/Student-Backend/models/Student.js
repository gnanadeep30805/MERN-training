var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    name: String,
    course: String,
    age: Number
});

var Student = mongoose.model("Student", studentSchema);

module.exports = Student;