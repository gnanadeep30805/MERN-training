// students.js
let students = [
    { id: 1, name: "Ramesh", course: "NodeJS" },
    { id: 2, name: "Babu", course: "ReactJS" }
];

function getStudents() {
    return students;
}

function addStudent(student) {
    students.push(student);
}

module.exports = {
    getStudents,
    addStudent
};