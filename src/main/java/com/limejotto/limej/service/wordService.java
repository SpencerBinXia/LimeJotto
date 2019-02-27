package com.limejotto.limej.service;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limejotto.limej.repository.wordRepo;

import com.limejotto.limej.object.Word;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


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
        List<Word> cpuWords = wrepo.guesstheWord();
        ArrayList<Word> matchedStrings = new ArrayList<>();
        Pattern regexP = Pattern.compile(regex);
        for (Word word : cpuWords){
            Matcher matcher = regexP.matcher(word.getWord());
            if (matcher.matches()){
                matchedStrings.add(word);
            }
        }
        Random rand = new Random();
        int random = rand.nextInt(matchedStrings.size());
        return matchedStrings.get(random);
    }
}
