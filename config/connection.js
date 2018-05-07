// requiring npm package
var mysql = require("mysql");

// hooking project with JawsDB
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    // setting up MySQL CONNECTION
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env[2],
        database: "burgers_db"
    });
}

// making connection
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id "+connection.threadId);
})
module.exports = connection;