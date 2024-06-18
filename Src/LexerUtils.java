package Src;

public class LexerUtils {
    // Method to display debug messages for lexer
    public static void debugLexer(String notationName, String notationSign, int lineNumber) {
        System.out.println("DEBUG_LEXER- " + notationName + " " + notationSign + " found at line " + lineNumber);
    }

    // Method to display warnings
    public static void warning(String warningType, int lineNumber) {
        System.out.println("WARNING- " + warningType + " found at " + lineNumber);
    }

    // Method to display errors
    public static void error(String errorType, int lineNumber) {
        System.out.println("ERROR- " + errorType + " found at " + lineNumber);
    }
}
