const path = require('path');


function resolvePath(relativePath) {
    // Using path.resolve to convert the relative path to an absolute path.
    const absolutePath = path.join(__dirname, relativePath);

    // Print the resolved path to the console.
    console.log('Resolved Path: ' + absolutePath);
}

// Test cases
resolvePath('../Day4/file1.txt');
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('../Day1/fileReader.js');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt
