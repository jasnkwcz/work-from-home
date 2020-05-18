var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");

router.post("/:entity/:id", function(req, res, next){
    let entity = req.params.entity;
    let id = req.params.id;
    connection.connect(function(err)
        {
            connection.query(`DELETE
                FROM ${entity}
                WHERE ${entity}.id=${id};`,
            function(err, result)
                {
                    if (err) throw err;
                    res.send(result);
                });
        });
});

module.exports = router;
