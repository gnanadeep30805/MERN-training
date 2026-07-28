import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeeCRUD() {

    var [employees, setEmployees] = useState([]);
    var [name, setName] = useState("");
    var [salary, setSalary] = useState("");
    var [id, setId] = useState("");

    useEffect(function () {
        loadEmployees();
    }, []);

    function loadEmployees() {
        axios.get("http://localhost:8989/api/employees")
            .then(function (res) {
                setEmployees(res.data);
            });
    }

    function saveEmployee() {
        axios.post("http://localhost:8989/api/employees", {
            name: name,
            salary: salary
        }).then(function () {
            loadEmployees();
        });
    }

    function editEmployee(emp) {
        setId(emp.id);
        setName(emp.name);
        setSalary(emp.salary);
    }

    function updateEmployee() {
        axios.put("http://localhost:8989/api/employees/" + id, {
            name: name,
            salary: salary
        }).then(function () {
            loadEmployees();
        });
    }

    function deleteEmployee(id) {
        axios.delete("http://localhost:8989/api/employees/" + id)
            .then(function () {
                loadEmployees();
            });
    }

    return (
        <div>
            <h2>MVC : Employee Management</h2>

        Name :    <input placeholder="Name" onChange={e => setName(e.target.value)} /> <br/>
        Salary :    <input placeholder="Salary" onChange={e => setSalary(e.target.value)} /> <br></br>

            <button onClick={saveEmployee}>Save</button>
          {/*  <button onClick={updateEmployee}>Update</button>  */}

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Salary</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(function (emp) {
                        return (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.salary}</td>
                                <td>
                                  {/*   <button onClick={() => editEmployee(emp)}>Edit</button>  */}
                                    <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeCRUD;