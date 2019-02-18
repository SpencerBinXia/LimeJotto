package com.limejotto.limej.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.limejotto.limej.service.loginRegisterService;
import com.limejotto.limej.object.RegInfo;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/register")
public class registerController {

    //@GetMapping
    @Autowired
    private loginRegisterService service;

    @RequestMapping(method=RequestMethod.GET)
    public String displayRegister(Model model) {
        model.addAttribute("reginfo", new RegInfo());
        return "register";
    }
    /*
        This method takes in a RegInfo obj which is filled with a username and password as per the form  data
        in register.html, this method registers the User then returns a template that uses thymeleaf to
        display the username
     */
    @RequestMapping(method=RequestMethod.POST)
    public String registerUser(@ModelAttribute RegInfo reginfo, HttpSession session, ModelMap model)
    {
        service.registerUser(reginfo, session);
        model.addAttribute("message","Welcome "+reginfo.getUsername());
        return "profile";
    }
}