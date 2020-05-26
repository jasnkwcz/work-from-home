var mysql = require('mysql');
var connection = mysql.createConnection({
        host: 'aamy461qunox1r.ccctyzpxtafz.us-east-1.rds.amazonaws.com',
        user: 'dbadmin',
        password: 'electricboogaloo',
        database: 'ebdb'
    }
);

connection.connect(function(err) {
        if (err) throw err;
        console.log("connected to mysql");
    }
);

module.exports = connection;
