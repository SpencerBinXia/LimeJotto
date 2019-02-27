package com.limejotto.limej.service;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limejotto.limej.repository.wordRepo;

import com.limejotto.limej.object.Word;


@Service
public class wordService {

    @Autowired
    private wordRepo wrepo;

    public boolean wordLookup(String word)
    {
        boolean wrepoResult = wrepo.findWord(word);
        if (wrepoResult == true)
        {
            return true;
        }
        else if (wrepoResult == false)
        {
            return false;
        }
        return false;
    }

    public String randomWord() {
        String wRepoResult = wrepo.randomInitialWord();
        return wRepoResult;
    }


    public Word guessWordService(String regex)
    {
        return wrepo.guesstheWord(regex);
    }
}
