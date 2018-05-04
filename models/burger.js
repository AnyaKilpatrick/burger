var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insertOne: function(burgerName, callback){
        orm.insertOne(burgerName, function(err, res){
            if(err) throw err;
            callback(res);
        });
    },
    updateOne: function(newName, id, func){
        orm.updateOne(newName, id, function(err, res){
            if(err) throw err;
            func(res);
        });
    }
}

module.exports = burger;