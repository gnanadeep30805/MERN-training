//without arrow
const student = {
    id : 1,
    name: "Ravi",
    course: "Node.js"
};

console.log(student);
function displayStudentInfo(){
    
console.log("without arrow");
    console.log("without arrow");
    console.log("Student Name: " + student.name);
    console.log("Student ID: " + student.id);
    console.log("Student Course: " + student.course);
}
displayStudentInfo();

//with arrow
const displayStudentInfoArrow = () => {
    console.log("with arrow");
    console.log("Student Name: " + student.name);
    console.log("Student ID: " + student.id);
    console.log("Student Course: " + student.course);
};
displayStudentInfoArrow();