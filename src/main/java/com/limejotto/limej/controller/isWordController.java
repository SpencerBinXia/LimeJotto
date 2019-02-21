package com.limejotto.limej.controller;

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
    public String wordLookup(@RequestBody Word userWord)
    {
        System.out.println(userWord.getWord());
        if (wservice.wordLookup(userWord.getWord()) == true)
        {
            return "This is a word";
        }
        else
        {
            return "This is false";
        }
    }
}
