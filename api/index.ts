import express, { Request, Response, NextFunction } from "express";
import path from "path";
const mysql = require('mysql');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "../public")));

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'test_user',
  password: 'password',
  database: 'testdb'
});

//connect to database
conn.connect((err: any) => {
  if (err) {
    console.log('Mysql Error...' + err);
  } else {
    console.log('Mysql Connected...');
  }
});

// app.get("/", (req: Request, res: Response, next: NextFunction): void => {
//   try {
//     res.send("index.html");
//   } catch (error) {
//     next(error);
//   }
// });

app.get('/api/users', (req, res) => {
  let sql = "SELECT * FROM users";
  let query = conn.query(sql, (err: any, results: any) => {
    if (err) {
      console.log('Mysql Error...' + err);

      const rows = [
        { user: 'John Doe', gender: 'Male', role: 'Admin', status: 'Active' },
        { user: 'Jane Smith', gender: 'Female', role: 'User', status: 'Inactive' },
        { user: 'Alex Johnson', gender: 'Male', role: 'User', status: 'Active' },
        { user: 'Sarah Davis', gender: 'Female', role: 'Admin', status: 'Active' },
      ];

      results = rows;
    }

    res.send(JSON.stringify({ "status": 200, "error": "sending default data", "response": results }));
  });
});


// const PORT = Number(process.env.PORT) || 3000;

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`App listening on port ${PORT}`);
// });

module.exports = app;