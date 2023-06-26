"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mysql = require('mysql');
const cors = require("cors");
require('dotenv').config();
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'test_user',
    password: 'password',
    database: 'testdb'
});
//connect to database
conn.connect((err) => {
    if (err) {
        console.log('Mysql Error...' + err);
    }
    else {
        console.log('Mysql Connected...');
    }
});
app.get("/", (req, res, next) => {
    try {
        res.send("index.html");
    }
    catch (error) {
        next(error);
    }
});
app.get('/users', (req, res) => {
    let sql = "SELECT * FROM users";
    let query = conn.query(sql, (err, results) => {
        if (err) {
            console.log('Mysql Error...' + err);
        }
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
const PORT = process.env.PORT || '3000';
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App listening on port ${PORT}`);
});
