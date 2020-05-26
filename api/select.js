var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");

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

router.get("/projects/:id", function(req, res, next){
    let id = req.params.id;
    connection.connect(function(err)
        {
            console.log("Connected to database");
            connection.query(`SELECT *
                FROM projects
                JOIN features ON (projects.id = features.project_id)
                WHERE projects.id=${id}`,
            function (err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });

});

router.get("/projects/search/:description", function(req, res, next){
    let description = req.params.description;
    description = '%' + description + '%';
    console.log(description);
    connection.connect(function(err)
        {
            console.log("Connected to database");
            connection.query(("SELECT * FROM projects WHERE description LIKE " + "'" + description + "'" ), function (err, result)
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
            connection.query(`SELECT *
                FROM ${entity}
                WHERE ${entity}.id=${id}`,

            function (err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });

});

module.exports = router;
