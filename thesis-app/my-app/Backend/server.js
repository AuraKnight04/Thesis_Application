const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '49311$%^Pr',
    database: 'thesis'
});

