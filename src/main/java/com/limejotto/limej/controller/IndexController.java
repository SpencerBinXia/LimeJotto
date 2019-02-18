package com.limejotto.limej.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/")
public class IndexController {

    @GetMapping
    public String home(Model model)
    {
        return "index";
    }

    @RequestMapping("/game")
    public String game(Model model){
        return "game";
    }
    @RequestMapping("/register")
    public String register(Model model){
        return "register";
    }
}
