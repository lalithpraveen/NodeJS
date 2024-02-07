// Day 7 -> Praveen kumar

const express = require('express');
const app = express();

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();

  const method = req.method;
  console.log(`${timestamp} - ${method} request received`);
  next();
}

app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
