package Src;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Lexer {
    public void analyze(String filePath) throws IOException {
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            int lineNumber = 1;
            boolean openBlockFound = false;
            int programCount = 1;
    
            System.out.println("Program " + programCount + " Lexical Analysis");
    
            while ((line = reader.readLine()) != null) {
                if (line.contains("{")) {
                    LexerUtils.debugLexer("Open Block Notation", "{", lineNumber);
                    openBlockFound = true;
                }
                if (line.contains("}")) {
                    if (openBlockFound) {
                        LexerUtils.debugLexer("Closing Block Notation", "}", lineNumber);
                        openBlockFound = false;
                    } else {
                        LexerUtils.error("Missing opening end of block notation", lineNumber);
                    }
                }
                if (line.contains("$")) {
                    LexerUtils.debugLexer("End of Program Notation", "$", lineNumber);
                    if (reader.ready()) {  // Check if there is more content after the EOP symbol
                        programCount++;
                        System.out.println("Program " + programCount + " Lexical Analysis");
                    }
                }
                lineNumber++;
            }
    
            if (openBlockFound) {
                LexerUtils.error("Missing closing end of block notation", lineNumber);
            }
        }
    }    
}



