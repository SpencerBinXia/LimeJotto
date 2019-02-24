package com.limejotto.limej.controller.API;

import org.json.simple.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.limejotto.limej.service.wordService;
import com.limejotto.limej.object.Word;

//import javax.servlet.http.HttpSession;

/*
 * Controller for word lookup in the database. Responds with 1 if the word is found, and 0 if the word is not found.
 */
@Controller
@RequestMapping("/cpuGuess")
@ResponseBody
public class cpuGuessController {

    @Autowired
    wordService wservice;

    @RequestMapping(method=RequestMethod.POST, produces= "application/json")
    public JSONObject wordLookup(@RequestBody String queryParam)
    {
        System.out.println(queryParam);
        JSONObject message = new JSONObject();
        if (wservice.wordLookup(queryParam))
        {
            message.put("word", "1");
            return message;

        }
        else if (!wservice.wordLookup(queryParam))
        {
            message.put("word", "0");
            return message;
        }
        return null;
    }
}
