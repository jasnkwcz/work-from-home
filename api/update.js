var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var connection = require("../dbconfig.js");
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({extended: false});

router.post("/:entity/:id", jsonParser, function(req, res, next){
    console.log(typeof req.body);
    let entity = req.params.entity;
    let id = req.params.id;
    let bodyKeys = Object.keys(req.body);
    console.log(bodyKeys);
    let bodyValues = Object.values(req.body);
    console.log(bodyValues);
    let queryString = `UPDATE ${entity} SET `;
    for (let i = 0; i < bodyKeys.length; i++)
    {
        queryString += bodyKeys[i];
        queryString += "=";
        queryString += "'" + bodyValues[i] + "'";
        if (i !== bodyKeys.length - 1)
        {
            queryString += ","
        }
    }
    queryString += ` WHERE id=${id};`
    console.log(queryString);
    connection.connect(function(err){
        connection.query(queryString,
            function(err, result){
                if (err) throw err;
                res.send(result);
            })

    })
});

module.exports = router;
