var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(express.json());

var employeeRoutes = require("./routes/EmployeeRoutes");
app.use("/api", employeeRoutes);

app.listen(8989, function () {
    console.log("Server running on port 8989");
});