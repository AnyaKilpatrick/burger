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
    updateOne: function(newName, id, func){
        orm.updateOne(newName, id, function(res){
            func(res);
        });
    }
}

module.exports = burger;