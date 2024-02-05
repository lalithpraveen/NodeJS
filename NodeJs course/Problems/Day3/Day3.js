const { exec } = require('child_process');

/**
 * Executes a shell command and prints the output to the console.
 * @param {string} command - The shell command to be executed.
 */
function executeCommand(command) {
    // Using child_process.exec to execute the shell command.
    exec(command, (err, stdout, stderr) => {
        if (err) {
            // Handle the error if the command execution fails.
            console.error(`Error executing command: ${err.message}`);
            return;
        }

        // Print the output of the command to the console.
        console.log('Command Output:\n' + stdout);
    });
}

// Test cases
executeCommand('dir');
// Expected Output: (output of dir)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
