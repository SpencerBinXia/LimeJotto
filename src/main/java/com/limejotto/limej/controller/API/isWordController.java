package com.limejotto.limej.controller.API;

import org.json.simple.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.limejotto.limej.service.wordService;
import com.limejotto.limej.object.Word;

/*
 * Controller for word lookup in the database. Responds with 1 if the word is found, and 0 if the word is not found.
 */
@Controller
@RequestMapping("/isWord")
@ResponseBody
public class isWordController {

    @Autowired
    wordService wservice;

    @RequestMapping(method=RequestMethod.POST, produces= "application/json")
    public JSONObject wordLookup(@RequestBody Word userWord)
    {
        JSONObject message = new JSONObject();
        if (wservice.wordLookup(userWord.getWord()))
        {
            message.put("word", "1");
            return message;

        }
        else if (!wservice.wordLookup(userWord.getWord()))
        {
            message.put("word", "0");
            return message;
        }
        return null;
    }
}
