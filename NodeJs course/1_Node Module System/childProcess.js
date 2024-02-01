// Importing the 'child_process' module for executing external commands.
const cp = require('child_process');

// Example of executing the 'calc' command 
// cp.execSync('calc');

// Example of executing the 'start chrome' command to open LinkedIn in the default browser 
// cp.execSync('start chrome https://www.linkedin.com/');

// Executing 'node demo.js' and capturing the output.
// Note: Make sure 'demo.js' contains the necessary code or provide the correct script name.
console.log('output ' + cp.execSync('node demo.js'));
