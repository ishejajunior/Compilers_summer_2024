export class Lexer {
    private input: string;
    private lineNumber: number;
    private messages: string[];

    constructor(input: string) {
        this.input = input;
        this.lineNumber = 1;
        this.messages = [];
    }

    public analyze() {
        let openBlocks = 0;

        for (let i = 0; i < this.input.length; i++) {
            const char = this.input[i];

            if (char === '{') {
                lexerOutput.debugLexer(`opening block found at line ${this.lineNumber}`);
                openBlocks++;
            } else if (char === '}') {
                if (openBlocks > 0) {
                    lexerOutput.debugLexer(`closing block notation found at line ${this.lineNumber}`);
                    openBlocks--;
                } else {
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

export const lexerOutput = new class{
    private messages: string[] = [];

    private log(messageType: string, details: string) {
        this.messages.push(`${messageType}- ${details}`);
        this.updateOutputTextArea();
    }

    debugLexer(message: string) {
        this.log('DEBUG_LEXER', message);
    }

    warning(warningType: string, lineNumber: number) {
        const message = `WARNING- ${warningType} found at line ${lineNumber}`;
        this.log('WARNING', message);
    }

    error(errorType: string, lineNumber: number) {
        const message = `ERROR- ${errorType} found at line ${lineNumber}`;
        this.log('ERROR', message);
    }

    private updateOutputTextArea() {
        const outputTextArea = document.getElementById('outputTextarea') as HTMLTextAreaElement;
        if (outputTextArea) {
            outputTextArea.value = this.messages.join('\n');
        }
    }

    getMessages() {
        return this.messages;
    }
}
