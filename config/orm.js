// requring module from connection.js
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(input, callback){
        var query = "select * from "+input;
        connection.query(query, function(err, result){
            if(err) throw err;
            callback(result);
        })
    },
    insertOne: function(burgerName, callback){
        connection.query("insert into burgers set ?", 
        {
            burger_name : burgerName
        }, function(err, result){
            if(err) throw err;
            callback(result);
            console.log("orm works");
        })
    },
    updateOne: function(newName, id, func){
        connection.query("update burgers set ? where ?", [
            {
                burger_name: newName
            },
            {
                id: id
            }
        ], function(err, result){
            if(err) throw err;
            func(result);
        })
    }
}
module.exports = orm;
