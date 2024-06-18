package Src;

import java.io.IOException;

public class Compiler {
     public static void main(String[] args) {
        if (args.length > 0) {
            String inputFile = args[0];
            Lexer lexer = new Lexer();
            try {
                System.out.println("Starting lexical analysis for " + inputFile);
                lexer.analyze(inputFile);
                System.out.println("Lexical analysis completed.");
            } catch (IOException e) {
                System.err.println("Failed to read file: " + e.getMessage());
            }
        } else {
            System.out.println("No input file provided. Please specify a file to analyze.");
        }
    }
}
