const express = require('express');
const app = express();
const port = 3003;
const mysql = require('mysql');
const cors = require('cors');
const sqlError = 'Error executing query: ';

// expressjs.com reference -> middleware CORS
app.use(cors());

// This is to allow the server to parse JSON data
app.use(express.json());

app.get('/products/:id', (req, res, next) => {
    res.json({msg: 'This is CORS-enabled for all origins!'});
});


// npmjs.com reference 
// this is to start the server on port 3003
app.listen(port,  () => {
    console.log(`Server is running on port ${port}`)
});


// Experienced CORS error which prevented the server from receiving data from the frontend
// The following code will act as middleware: https://expressjs.com/en/resources/middleware/cors.html
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });


const db = mysql.createConnection({
    host: 'db-thesis-app.cjqoma42a22a.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: '49311$%^Pr',
    database: 'Gamified_ToDoList_DB'
});

app.use((req, res, next) => {
    res.header("Content-Security-Policy", "img-src 'self'; default-src 'self';");
    next();
  });

db.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database with threadId: ' + db.threadId);
});

// Use express.js to connect backend to frontend with API endpoints
app.post('/api/signin', (req, res) => {
    const inputUsername = req.body.username;
    const inputPassword = req.body.password;
    db.query("SELECT userName, userPassword FROM Users", function (err, result, fields) {
        if (err) throw err;
        let match = false;
        for (i = 0; i < result.length; i++) {
            if (result[i].userName === inputUsername && result[i].userPassword === inputPassword) {
                console.log("Username & Password Match");
                match = true;
                break;
            } 
        }
        if (match){
            res.json({success: true, message: "Sign in successful"});
        } else {
            res.json({success: false, message: "Sign in failed"});
        }
    });
});
// Had to fix this code to make it function
    // This code was sending out multiple json responses before the function was completed
app.post('/api/logOut', (req, res) => {
    const inputUsername = req.body.username;
    const inputTaskValue = req.body.taskValue;
    const inputPointValue = req.body.pointValue;
    const inputDate = req.body.currentDate;
    db.query("SELECT userID FROM Users WHERE userName = ?", [inputUsername], function (err, result, fields) {
        if (err) {
            console.error(sqlError + err.stack);
            res.json({success: false, message: 'Server Error'});
            return;
        }
        let userID = result[0].userID;
        console.log("User ID: ", userID);
        db.query("INSERT INTO DailyProgress (progressDate, pointsEarned, tasksCompleted, userID) VALUES (?, ?, ?, ?)", [inputDate, inputPointValue, inputTaskValue, userID], function (err, result) {
            if (err) {
                console.error(sqlError + err.stack);
                res.json({success: false, message: "Data Insertion Failed"});
                return;
            }
            console.log("Data Inserted");
            res.json({message:"Data Inserted"});
        });
    });
});


/*
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
    */



