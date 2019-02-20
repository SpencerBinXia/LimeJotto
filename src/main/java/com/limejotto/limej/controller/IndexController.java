package com.limejotto.limej.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/")
public class IndexController {

    /*
        this method is mapped to the front page and returns index.html
     */
    @GetMapping
    public String home(Model model)
    {
        return "index";
    }


    /*
        when the mapping /game is made we return game.html
     */

    @RequestMapping("/game")
    public String game(Model model){
        return "game";
    }
}
