package com.limejotto.limej.controller.API;

import org.json.simple.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.limejotto.limej.service.wordService;
import com.limejotto.limej.object.Word;

//import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/isWord")
@ResponseBody
public class isWordController {

    @Autowired
    wordService wservice;

    @RequestMapping(method=RequestMethod.POST, produces= "application/json")
    public JSONObject wordLookup(@RequestBody Word userWord)
    {
        System.out.println(userWord.getWord());
        JSONObject message = new JSONObject();
        if (wservice.wordLookup(userWord.getWord()) == true)
        {
            message.put("word", "This is a word");
            return message;

        }
        else if (wservice.wordLookup(userWord.getWord()) == false)
        {
            message.put("word", "This is false");
            return message;
        }
        return null;
    }
}
