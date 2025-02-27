const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');


// npmjs.com reference 

const db = mysql.createConnection({
    host: 'db-thesis-app.cjqoma42a22a.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: '49311$%^Pr',
    database: 'Gamified_ToDoList_DB'
});

db.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database with threadId: ' + db.threadId);
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
