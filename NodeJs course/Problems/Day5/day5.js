// Day 5 -> Praveen kumar
const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    // Using path.extname to get the file extension.
    const actualExtension = path.extname(filePath);

    if (actualExtension === expectedExtension) {
        console.log(`File has the expected extension: ${actualExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
    }
}

// Test cases
checkFileExtension('test/test.js', '.js');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png
