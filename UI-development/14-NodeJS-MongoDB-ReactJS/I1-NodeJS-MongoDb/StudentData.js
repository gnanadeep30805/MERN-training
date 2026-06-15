// Import mongoose
var mongoose = require("mongoose");

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mystudentdb1");

console.log("MongoDB Connected");

// Schema
var studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Model
var Student = mongoose.model("Student", studentSchema);

// MAIN FUNCTION
async function runApp() {

    // INSERT DATA
    var student1 = new Student({
        name: "Raj",
        age: 24,
        course: "NodeJS"
    });

    await student1.save();
    console.log("Student Saved");

    // READ DATA
    var students = await Student.find();
    console.log("Student List:");
    console.log(students);
}

// Call function
runApp();

// npm init -y
//npm install mongoose

//node StudentsData.js