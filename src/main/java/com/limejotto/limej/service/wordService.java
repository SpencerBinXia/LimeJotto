package com.limejotto.limej.service;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limejotto.limej.repository.wordRepo;

@Service
public class wordService {

    @Autowired
    private wordRepo wrepo;

    public boolean wordLookup(String word)
    {
        if (wrepo.findWord(word) == true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
