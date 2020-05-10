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

router.get("/projects/:id", function(req, res, next){
    let id = req.params.id;
    connection.connect(function(err)
        {
            console.log("Connected to database");
            connection.query(`SELECT *
                FROM projects
                JOIN features ON (projects.id = features.project_id)
                JOIN tasks ON (features.id = tasks.for_feature)
                WHERE projects.id=${id}`,
            function (err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });


})

router.get("/:entity/:description", function(req, res, next){
    let entity = req.params.entity;
    let description = req.params.description;
    console.log(description);
    connection.connect(function(err)
        {
            console.log("Connected to database");
            connection.query((`SELECT * FROM ${entity} WHERE description LIKE` + "'" + description + "'"), function (err, result)
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
