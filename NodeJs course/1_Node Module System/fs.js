const fs = require('fs');

// reading a file 

let fileContent = fs.readFileSync('f1.txt')

console.log('data of file 1-> '+ fileContent)


// write in a file 

fs.writeFileSync('f2.txt', 'Hi praveen updating file text.')


// append a file 

fs.appendFileSync('f2.txt', 'Appending further to existing one.')


// delete a file

fs.unlinkSync('f3.txt')