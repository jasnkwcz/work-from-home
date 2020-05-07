//get projects from database
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js")

router.get("/", function(req, res, next){
    connection.connect( function(err)
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

module.exports = router;
