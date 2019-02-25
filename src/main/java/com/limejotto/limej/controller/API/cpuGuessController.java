package com.limejotto.limej.controller.API;

import org.json.simple.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.limejotto.limej.service.wordService;
import com.limejotto.limej.object.Word;

import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;


//import javax.servlet.http.HttpSession;

/*
 * Controller for word lookup in the database. Responds with 1 if the word is found, and 0 if the word is not found.
 */
@RestController
@RequestMapping("/cpuGuess")
public class cpuGuessController {

    @Autowired
    wordService wservice;

    @RequestMapping(method=RequestMethod.GET)
    public String wordLookup(HttpServletResponse response, @RequestParam("cpuGuess") String regex) throws UnsupportedEncodingException {

        response.setContentType("text/plain;charset=UTF-8");
        Word guess = wservice.guessWordService(regex);
        return guess.getWord();
    }
}
