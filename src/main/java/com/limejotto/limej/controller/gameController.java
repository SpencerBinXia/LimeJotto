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
@RequestMapping("/game")
public class gameController {

    //@GetMapping
    @Autowired
    private loginRegisterService service;

    /*
        This method takes in a RegInfo obj which is filled with a username and password as per the form  data
        in register.html, this method registers the User then returns game.html that uses thymeleaf to
        display the username
     */
    @RequestMapping(method=RequestMethod.POST)
    public String registerUser(@ModelAttribute RegInfo reginfo, HttpSession session, ModelMap model)
    {
        service.registerUser(reginfo, session);
        session.setAttribute("username", reginfo.getUsername());
        model.addAttribute("message","Welcome "+reginfo.getUsername());
        return "game";
    }

    @RequestMapping(method=RequestMethod.GET)
    public String sendUser(HttpSession session)
    {
        return "game";
    }

}