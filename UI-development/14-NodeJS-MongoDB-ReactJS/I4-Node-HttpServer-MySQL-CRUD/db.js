var mysql = require("mysql2");

var db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "Deepu@549",
    database: "node_mysql_db"
});

db.connect(function (err) {
    if (err) {
        console.error("DB Connection Error:", err);
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = db;