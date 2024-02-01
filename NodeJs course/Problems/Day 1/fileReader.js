// Day -1 -> Praveen kumar

const fs = require('fs');

function readFileContent(filePath) {
    // Using fs.readFile to read the file asynchronously.
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Handle the error if the file cannot be read.
            console.error(`Error reading file: ${err.message}`);
        } else {
            // Print the content of the file to the console.
            console.log('File Content:\n' + data);
        }
    });
}

// Test cases
readFileContent('file1.txt');
// Expected Output: Content of file1.txt

readFileContent('empty-file.txt');
// Expected Output: (empty string)

readFileContent('nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...
