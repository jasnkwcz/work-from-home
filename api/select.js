var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");

router.get("/projects", function (req, res, next){
    connection.connect(function(err)
        {
            console.log("Connected to database");
            connection.query('SELECT * FROM projects',
            function (err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });
});
//router.get("/teams", function(req, res, next)){}
//router.get("/features", function(req, res, next)){}
//router.get("/tasks", function(req,res,next)){}
//router.get("/employees", function(req, res, next)){}

module.exports = router;
