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

    burger.insertOne(req.body.name, function(result){
        res.redirect("/");
    })
});

router.put("/api/burgers/:id", function(req, res){
    var id = req.params.id;
    burger.updateOne("newName", id, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})

module.exports = router;