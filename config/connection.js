// requiring npm package
var mysql = require("mysql");
// setting up MySQL CONNECTION
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"y2n2sql-materdolorosa2",
    database: "burgers_db"
})
// making connection
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id "+connection.threadId);
})
module.exports = connection;