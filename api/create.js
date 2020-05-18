var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");

router.post("/projects/", function(req, res, next){
    connection.connect(function(err)
        {
            console.log(req.body.description);
            console.log(req.body.assigned_team);
            connection.query('INSERT INTO projects VALUES (?, ?, ?)',
                [
                    null,
                    req.body.description,
                    req.body.assigned_team
                ],
            function(err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });
});

router.post("/teams/", function(req, res, next){
    connection.connect(function(err)
        {
            connection.query('INSERT INTO teams VALUES (?, ?, ?, ?, ?)',
                [
                    null,
                    req.body.team_lead,
                    req.body.assigned_project,
                    req.body.capacity,
                    req.body.is_full

                ],
            function(err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });
});

router.post("/employees/", function(req, res, next){
    connection.connect(function(err)
        {
            connection.query('INSERT INTO employees VALUES (?, ?, ?, ?, ?, ?)',
                [
                    null,
                    req.body.first_name,
                    req.body.last_name,
                    req.body.time_zone,
                    req.body.seniority,
                    req.body.team_id
                ],
            function(err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });
});

router.post("/features/", function(req, res, next){
    connection.connect(function(err)
        {
            connection.query('INSERT INTO features VALUES (?, ?, ?, ?, ?, ?)',
                [
                    null,
                    req.body.project_id,
                    req.body.description,
                    req.body.type,
                    req.body.priority,
                    req.body.completed
                ],
            function(err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });
});

router.post("/tasks/", function(req, res, next){
    connection.connect(function(err)
        {
            connection.query('INSERT INTO tasks VALUES (?, ?, ?, ?, ?, ?)',
                [
                    null,
                    req.body.description,
                    req.body.due_date,
                    req.body.completed,
                    req.body.for_feature,
                    req.body.assigned_to
                ],
            function(err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });
});




module.exports = router;

