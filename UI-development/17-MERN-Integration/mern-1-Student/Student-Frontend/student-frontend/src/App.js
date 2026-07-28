import React from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function App() {
    return (
        <div>
            <h1>Student Management</h1>
            <StudentForm />
            <StudentList />
        </div>
    );
}

export default App;