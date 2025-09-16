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
// throws error if db is unreachable
db.connect(err => {
    // throws error if db is unreachable
    if (err) { console.error('DB connect error', err); process.exit(1); }
    console.log('Connected to MySQL');
});

// creates signup
app.post('/signup', async(req, res) => {
    // grabs credentials from body
    const { username, email, password} = req.body;

    // checks if credentials are filled
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }

    // ensures credentials are unique (user and email)
    db.query('SELECT 1 FROM users WHERE username=? OR email=?', [username, email], async (err, rows) => {
        if (err) { return res.status(500).send('Server Error'); }
        if (rows.length) { return res.status(400).send('Username or email already taken'); }

        const hash = await bcrypt.hash(password, 10);

        db.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hash],
            (err2) => {
                if (err) { return res.status(500).send('Error creating user'); }
                res.send('Signup successful')
            }
        );
    });
});