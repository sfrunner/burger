//mysql connection
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 4000,
    user: "root",
    password: "bcb1234",
    database: "burgers_db"
});
connection.connect(function (err) {
    if (err) {
        console.log(err)
    }
});

module.exports = connection;