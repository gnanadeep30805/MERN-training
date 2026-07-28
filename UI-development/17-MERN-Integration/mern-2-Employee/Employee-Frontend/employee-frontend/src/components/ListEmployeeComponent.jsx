import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };

        // Bind methods
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees()
            .then(function (res) {
                this.setState({ employees: res.data });
            }.bind(this));
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    editEmployee(id) {
        this.props.history.push('/add-employee/' + id);
    }

    viewEmployee(id) {
        this.props.history.push('/view-employee/' + id);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id)
            .then(function () {
                this.setState({
                    employees: this.state.employees.filter(
                        function (employee) {
                            return employee._id !== id;
                        }
                    )
                });
            }.bind(this));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>

                <div className="row">
                    <button
                        className="btn btn-primary"
                        onClick={this.addEmployee}
                    >
                        Add Employee
                    </button>
                </div>

                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    function (employee) {
                                        return (
                                            <tr key={employee._id}>
                                                <td>{employee.firstName}</td>
                                                <td>{employee.lastName}</td>
                                                <td>{employee.emailId}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-info"
                                                        onClick={this.editEmployee.bind(this, employee._id)}
                                                    >
                                                        Update
                                                    </button>

                                                    <button
                                                        className="btn btn-danger"
                                                        style={{ marginLeft: "10px" }}
                                                        onClick={this.deleteEmployee.bind(this, employee._id)}
                                                    >
                                                        Delete
                                                    </button>

                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ marginLeft: "10px" }}
                                                        onClick={this.viewEmployee.bind(this, employee._id)}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    }.bind(this)
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;