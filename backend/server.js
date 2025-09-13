require('dotenv').config();
const express = require('express');
const msql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors'); // allows which frontends are allowed to send requests to backend

const app = express();
const port = process.env.port || 5001;

// cors
app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));