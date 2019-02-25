package com.limejotto.limej.object;

import java.time.LocalDateTime;

public class Game {

    private LocalDateTime gameTime;
    private String username;
    private String userWord;
    private String cpuWord;
    private String userGuesses;
    private String cpuGuesses;

    public LocalDateTime getGameTime() {
        return gameTime;
    }

    public void setGameTime(LocalDateTime gameTime) {
        this.gameTime = gameTime;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserWord() {
        return userWord;
    }

    public void setUserWord(String userWord) {
        this.userWord = userWord;
    }

    public String getCpuWord() {
        return cpuWord;
    }

    public void setCpuWord(String cpuWord) {
        this.cpuWord = cpuWord;
    }

    public String getUserGuesses() {
        return userGuesses;
    }

    public void setUserGuesses(String userGuesses) {
        this.userGuesses = userGuesses;
    }

    public String getCpuGuesses() {
        return cpuGuesses;
    }

    public void setCpuGuesses(String cpuGuesses) {
        this.cpuGuesses = cpuGuesses;
    }
}
