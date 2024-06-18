export class Lexer {
    input;
    lineNumber;
    messages;
    constructor(input) {
        this.input = input;
        this.lineNumber = 1;
        this.messages = [];
    }
    analyze() {
        let openBlocks = 0;
        for (let i = 0; i < this.input.length; i++) {
            const char = this.input[i];
            if (char === '{') {
                lexerOutput.debugLexer(`opening block found at line ${this.lineNumber}`);
                openBlocks++;
            }
            else if (char === '}') {
                if (openBlocks > 0) {
                    lexerOutput.debugLexer(`closing block notation found at line ${this.lineNumber}`);
                    openBlocks--;
                }
                else {
                    lexerOutput.error('Unmatched closing block', this.lineNumber);
                }
            }
            if (char === '\n') {
                this.lineNumber++;
            }
        }
        if (openBlocks > 0) {
            lexerOutput.error(`missing closing end of block notation at line ${this.lineNumber}`, this.lineNumber);
        }
        this.logMessages();
    }
    logMessages() {
        this.messages.forEach((message) => {
            console.log(message);
        });
    }
    getMessages() {
        return this.messages;
    }
    getLineNumber() {
        return this.lineNumber;
    }
}
export const lexerOutput = new class {
    messages = [];
    log(messageType, details) {
        this.messages.push(`${messageType}- ${details}`);
        this.updateOutputTextArea();
    }
    debugLexer(message) {
        this.log('DEBUG_LEXER', message);
    }
    warning(warningType, lineNumber) {
        const message = `WARNING- ${warningType} found at line ${lineNumber}`;
        this.log('WARNING', message);
    }
    error(errorType, lineNumber) {
        const message = `ERROR- ${errorType} found at line ${lineNumber}`;
        this.log('ERROR', message);
    }
    updateOutputTextArea() {
        const outputTextArea = document.getElementById('outputTextarea');
        if (outputTextArea) {
            outputTextArea.value = this.messages.join('\n');
        }
    }
    getMessages() {
        return this.messages;
    }
};
//# sourceMappingURL=Lexer.js.map