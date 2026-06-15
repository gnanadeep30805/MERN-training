var mysql = require('mysql2');

var db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Deepu@549',
    database: 'expstudentdb1'
});

db.connect(function (err) {
    if (err) {
        console.log(' MySQL Connection Error');
        console.log(err);
    } else {
        console.log('MySQL Connected');
    }
});

module.exports = db;