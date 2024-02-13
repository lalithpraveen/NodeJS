// Day 12 -> Praveen kumar
const express = require('express')
const rateLimit = require('express-rate-limit')

const app = express()
const msg = 'Too many requests from this IP,please try again after 2 minutes'
const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 4,
    message: msg,
    handler: (req,res) => {
        res.status(429).json(msg)
    }
})


app.use(limiter);

app.get('/', (req, res) => {
    res.send('Rate limiting implementation')
})

app.listen(3000,()=>{
    console.log('Server is running')
})