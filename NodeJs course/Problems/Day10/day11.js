const express = require('express')
const app = express()
const path = require('path')
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'secret';

app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')))
const users = [
    {
        username: 'user',
        password: 'password123admin',
        role: 'admin'
    },
    {
        username: 'user1',
        password: 'password123member',
        role: 'member'
    }
];
app.post('/login', (req, res) => {
// Read username and password from request body
const { username, password } = req.body;

// Filter user from the users array by username and password
const user = users.find(u => { return u.username === username && u.password === password });

if (user) {
    // Generate an access token
    const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);

    res.json({
        accessToken
        });
    } else {
        res.send('Username or password incorrect');
        }
    });
/**
* Authentication middleware for Express
* @param {Object} req - Express request object
* @param {Object} res - Express response object
* @param {Function} next - Express next function
*/
function authenticationMiddleware(req, res, next) {
    // Your implementation here
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).json({error:'Unauthorized user'})
    }
    try{
        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, accessTokenSecret, (err, user) => {
                if (err) {
                    res.status(401).json({error:'Unauthorized user - JWT TOKEN'})
                }

                req.user = user;
                next();
        });}
    }catch(error){
        res.status(401).json({error:'Unauthorized user - JWT TOKEN'})
    }


}
app.get('/secure',authenticationMiddleware,(re,res)=>{
    res.json({message:'Authorized'})
})

app.listen(3000,()=>{
    console.log('Server is running')
})