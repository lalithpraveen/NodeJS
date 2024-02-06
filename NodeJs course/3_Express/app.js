const express = require('express')

const app = express()

// get, post, put , delete

app.get('/', (req, res) => {
    res.send('Hello from node js home')
})

app.get('/topics', (req, res) => {
    res.send('Welcome to node js topics')
})

app.get('/about', (req, res) => {
    res.send('Welcome to node js about section')
})

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Port is running on ${port}`))