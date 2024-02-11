// Day 8 -> Praveen kumar
const express = require('express');
const app = express();

function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.send('Success! The number is a positive integer.');
  } else {
    throw new Error('The number parameter must be a positive integer.');
  }
}

function errorHandler(err, req, res, next) {
  if (err.message === 'The number parameter must be a positive integer.') {
    res.status(400).send('Error: The number parameter must be a positive integer.');
  } else {
    next(err);
  }
}

// Register route and error handling middleware
app.get('/positive', positiveIntegerHandler);
app.use(errorHandler);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
