const express = require('express');
const dbConnect = require('./config/DbConnect');
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT||4000;
dbConnect()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))