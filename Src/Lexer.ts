type MessageType = 'DEBUG_LEXER' | 'WARNING' | 'ERROR';

class LexerOutput {
    private messages: string[] = [];

    private log(messageType: MessageType, details: string) {
        this.messages.push(`${messageType}- ${details}`);
        this.updateOutputTextArea();
    }

    debugLexer(notationName: string, notationSign: string, lineNumber: number) {
        const message = `DEBUG_LEXER- ${notationName} ${notationSign} found at line ${lineNumber}`;
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

// Exporting the instance of LexerOutput to use it in other modules
export const lexerOutput = new LexerOutput();
