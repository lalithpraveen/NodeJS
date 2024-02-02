// Day -2 -> Praveen kumar
const fs = require('fs');


function writeToFile(filePath, content) {
    // Using fs.writeFile to write content to the file asynchronously.
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            // Handle the error if writing to the file fails.
            console.error(`Error writing to file: ${err.message}`);
        } else {
            // Print a success message if writing is successful.
            console.log(`Data written to ${filePath}`);
        }
    });
}
// Test cases
writeToFile('output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...
