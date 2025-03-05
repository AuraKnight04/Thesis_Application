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

// Use express.js to connect backend to frontend with API endpoints
app.get('/api/users', (req, res) => {
    db.query("SELECT userName, userPassword FROM Users", function (err, result, fields) {
        if (err) {
            console.error("errorr running query:" + err);
            res.status(500).send('An error occurred');
        } else {
            res.send(result);
        }
    });
});

// this is to start the server on port 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp 
    db.query("SELECT * FROM Users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });

    db.query("SELECT userName, userPassword FROM Users", function (err, result, fields) {
        if (err) throw err;
        arr = [result]
        console.log(result);
        console.log(arr);
      }
    );



