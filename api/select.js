var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");

/*router.get("/projects", function (req, res, next){
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
*/
//router.get("/teams", function(req, res, next)){}
//router.get("/features", function(req, res, next)){}
//router.get("/tasks", function(req,res,next)){}
//router.get("/employees", function(req, res, next)){}

router.get("/:entity", function(req, res, next){
    let entity = req.params.entity;
    connection.connect(function(err)
        {
            console.log("Connected to database");
            connection.query(`SELECT * FROM ${entity}`,
            function (err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });
});

router.get("/:entity/:id", function(req, res, next){
    let entity = req.params.entity;
    let id = req.params.id;
    connection.connect(function(err)
        {
            console.log("Connected to database");
            connection.query(`SELECT * FROM ${entity} WHERE id=${id}`,
            function (err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });

});
module.exports = router;
