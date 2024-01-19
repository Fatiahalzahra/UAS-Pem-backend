// import mysql
const mysql = require('mysql');

// import dotenv
require('dotenv').config();

// destructing object process.env
const { localhost, root, Fatiah, ddbberita } = process.env;

// membuat koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fatiah',
    database: 'dbberita.sql',
});

// menghubungkan ke database
db.connect((err) => {
    if(err){
        console.log("Error connecting database ..." + err.stack);
        return;
    }else{
        console.log("Database connected ...");
        return;
    }
});

module.exports = db;