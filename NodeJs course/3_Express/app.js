const express = require('express')
const morgan = require('morgan')

const app = express()

// get, post, put , delete

app.use(express.json())

app.use(morgan())

let books = [
    { id: 1, title: "The Secret" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "1984" },
    { id: 4, title: "Pride and Prejudice" },
    { id: 5, title: "The Great Gatsby" },
    { id: 6, title: "Harry Potter and the Sorcerer's Stone" },
    { id: 7, title: "The Catcher in the Rye" },
    { id: 8, title: "The Hobbit" },
    { id: 9, title: "Animal Farm" },
    { id: 10, title: "The Alchemist" }
];

app.get('/', (req, res) => {
    res.send('Hello from node js home')
})

app.get('/topics', (req, res) => {
    res.send('Welcome to node js topics')
})

app.get('/about', (req, res) => {
    res.send('Welcome to node js about section')
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/books/:id', (req, res) => {
    let book = books.find(book => book.id == req.params.id)
    

    if (!book) res.status(404).send('There is no book with this id in current library try 1 to 10')
    res.send(book)
})

app.post('/books', (req, res) => {
    const book = {
        id: books.length+1, 
        title: req.body.title
    }
    books.push(book)
    res.send(books)
})

// put method 

app.put('/books/:booktitle', (req, res) => {
    let book = books.find(book => book.title == req.params.booktitle)
    book.title = req.body.title 
    res.send(book)
})


// delete method

app.delete('/books/:id', (req,res) => {
    let book = books.find(book => book.id === parseInt(req.params.id))
    if (!book) res.status(404).send('The book you are looking not in current library')
    const index = books.indexOf(book)
    books.splice(index,1)
    res.send(books)
})

const port = process.env.PORT || 8000

app.listen(port, ()=> console.log(`Port is running on ${port}`))