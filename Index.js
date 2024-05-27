import { lexerOutput } from './Dist/Lexer.js';
document.addEventListener('DOMContentLoaded', () => {
    // Function to execute the code
    function executeCode() {
        const inputText = getInput();
        
        // Assuming these functions are defined in their respective modules
        const lexerOutput = Lexer.run(inputText);
        const parserOutput = Parser.run(lexerOutput);
        const semanticOutput = SemanticAnalyzer.run(parserOutput);

        // Collect all messages to display
        const outputMessages = [...lexerOutput.messages, ...parserOutput.messages, ...semanticOutput.messages];
        
        // Display the messages in the output text area
        setOutput(outputMessages.join('\n'));
    }

    // Function to get input from the text area
    function getInput() {
        const inputTextarea = document.getElementById('inputTextarea');
        return inputTextarea.value;
    }

    // Function to set output in the output text area
    function setOutput(message) {
        const outputTextarea = document.getElementById('outputTextarea');
        outputTextarea.value = message;
    }

    // Attach executeCode function to the button click event
    const executeButton = document.querySelector('button');
    executeButton.addEventListener('click', executeCode);
});
