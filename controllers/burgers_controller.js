var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(result){
        console.log("new burger added");
        res.status(200).end();
    })
});

router.put("/api/burgers/:id", function(req, res){
    var id = req.params.id;
    burger.updateOne(req.body.devoured, id, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})

module.exports = router;