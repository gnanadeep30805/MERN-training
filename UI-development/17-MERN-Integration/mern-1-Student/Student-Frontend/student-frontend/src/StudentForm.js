import React, { Component } from "react";

class StudentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            course: "",
            age: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        var studentData = {
            name: this.state.name,
            course: this.state.course,
            age: this.state.age
        };

        fetch("http://localhost:5000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentData)
        })
        .then(function () {
            alert("Student Added");
        });

        this.setState({
            name: "",
            course: "",
            age: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Student</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                /><br /><br />

                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={this.state.course}
                    onChange={this.handleChange}
                /><br /><br />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}
                /><br /><br />

                <button type="submit">Add Student</button>
            </form>
        );
    }
}

export default StudentForm;