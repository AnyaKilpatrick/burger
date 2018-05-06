// requring module from connection.js
var connection = require("../config/connection.js");

var orm = {
    // displaying all items
    selectAll: function(input, callback){ 
        var query = "select * from "+input;
        connection.query(query, function(err, result){
            if(err) throw err;
            callback(result);
        })
    },
    // adding new item
    insertOne: function(burgerName, callback){
        connection.query("insert into burgers set ? ;", 
        {
            burger_name : burgerName
        }, function(err, result){
            if(err) throw err;
            callback(result);
            console.log("orm works");
        })
    },
    // updating value of column "devoured" of specific item
    updateOne: function(devoured, id, callback){
        connection.query("update burgers set ? where ?", [
            {
                devoured: devoured
            },
            {
                id: id
            }
        ], function(err, result){
            if(err) throw err;
            callback(result);
        })
    }
}
module.exports = orm;
