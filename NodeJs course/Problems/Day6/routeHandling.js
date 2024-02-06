// Day 6 -> Praveen kumar

const express = require('express')
const app = express()
const port = 8000;

function greetHandler(req, res) {
    res.status(200).send(`Hello, ${req.query.name || 'Guest'}`)
}

app.get('/greet', greetHandler)
app.get('/greet?name', greetHandler)
app.listen(port)