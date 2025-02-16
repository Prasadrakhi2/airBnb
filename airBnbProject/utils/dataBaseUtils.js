const mysql = require('mysql2');

const pool =mysql.createPool({
    host : "localhost", //ip address
    user : "root",
    password : "rakhi@200",
    database : "airbnb"
})

module.exports = pool.promise();