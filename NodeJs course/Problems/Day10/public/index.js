// Day 10-> Praveen kumar

const express = require('express');
const path = require('path');
const app = express();

// Define the directory for serving static files
const publicDirectoryPath = path.join(__dirname);

// // Middleware to serve static files from the "public" directory
app.use(express.static(publicDirectoryPath));

app.get("/", (req,res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'))
})



// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
