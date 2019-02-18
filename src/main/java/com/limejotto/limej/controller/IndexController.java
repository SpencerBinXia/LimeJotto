package com.limejotto.limej.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.limejotto.limej.service.loginRegisterService;
import com.limejotto.limej.object.regInfo;
import com.limejotto.limej.object.user;

@Controller
@RequestMapping("/")
public class IndexController {

    @GetMapping
    public String home(Model model)
    {
        return "index";
    }

    @Autowired
    private loginRegisterService service;

    @RequestMapping("/game")
    public String game(Model model){
        return "game";
    }
    //@RequestMapping("/register")
    //public String register(Model model){
       // return "register";
    //}
    @RequestMapping("submitRegistration")
    public String submitRegistration(@RequestParam("userName") String userName , @RequestParam("password") String password, Model model){
        if (userName!=null) {
            model.addAttribute("message", "Welcome "+userName);
        }
        if (password!= null) {
            model.addAttribute("password", password);
        }
        return "profile";
    }
}
