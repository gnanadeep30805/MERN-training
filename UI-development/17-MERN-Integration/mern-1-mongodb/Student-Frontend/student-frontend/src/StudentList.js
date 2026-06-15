import React, { Component } from "react";

class StudentList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/students")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.setState({ students: data });
            }.bind(this));
    }

    render() {
        return (
            <div>
                <h2>Student List</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map(function (student, index) {
                            return (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.course}</td>
                                    <td>{student.age}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;