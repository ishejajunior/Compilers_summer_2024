import { Lexer } from './Dist/Lexer.js';

// Add a test case to verify the Lexer functionality
function runTestCase() {
    const testInput = `
        function test() {
            if (true) {
                console.log('Test');
            } else {
                console.log('Else');
            }
        }
    `;
    console.log('Running test case with input:', testInput);

    const lexer = new Lexer(testInput);
    lexer.analyze();

    console.log('Test case output:', lexerOutput.getMessages().join('\n'));
}

runTestCase(); // Run the test case on page load

  