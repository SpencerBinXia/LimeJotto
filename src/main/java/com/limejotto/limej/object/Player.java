package com.limejotto.limej.object;

import java.util.ArrayList;

public class Player {
    private String word;
    private ArrayList<String> lettersGuessedCorrect;
    public Player(String word, ArrayList<String> lettersGuessedCorrect){
        this.word = word;
        this.lettersGuessedCorrect = lettersGuessedCorrect;
    }

    public String getWord() {
        return word;
    }

    public ArrayList<String>[] getLettersGuessedCorrect() {
        return lettersGuessedCorrect;
    }

    public void setLettersGuessedCorrect(ArrayList<String> lettersGuessedCorrect) {
        this.lettersGuessedCorrect = lettersGuessedCorrect;
    }

    public void setWord(String word) {
        this.word = word;
    }
}
