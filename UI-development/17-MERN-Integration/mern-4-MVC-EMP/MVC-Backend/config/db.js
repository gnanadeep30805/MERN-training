var mysql = require("mysql2");

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Deepu@549",
    database: "companydb"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("MySQL Connected");
});

module.exports = db;
