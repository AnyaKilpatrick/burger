var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insertOne: function(burgerName, callback){
        orm.insertOne(burgerName, function(res){
            callback(res);
        });
    },
    updateOne: function(devoured, id, callback){
        orm.updateOne(devoured, id, function(res){
            callback(res);
        });
    }
}

module.exports = burger;