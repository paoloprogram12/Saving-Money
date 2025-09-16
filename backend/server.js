require('dotenv').config();
const express = require('express'); // web framework to create routes
const mysql = require('mysql2'); // SQL db
const bcrypt = require('bcryptjs'); // used to hash out and compare passwords
const cors = require('cors'); // allows which frontends are allowed to send requests to backend

const app = express();
const port = process.env.port || 5001;

// cors
app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

