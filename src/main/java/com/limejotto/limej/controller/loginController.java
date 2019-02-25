package com.limejotto.limej.controller;

import com.limejotto.limej.object.RegInfo;
import com.limejotto.limej.service.loginRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/login")
public class loginController {

    @Autowired
    private loginRegisterService service;

    @RequestMapping(method= RequestMethod.POST)
    public String registerUser(@ModelAttribute RegInfo loginfo, HttpSession session, ModelMap model)
    {
        boolean loginBool = service.loginUser(loginfo);
        System.out.println("login control reached");
        if (loginBool)
        {
            session.setAttribute("username", loginfo.getUsername());
            System.out.println("loginBool reached");
            return "redirect:/profile";
        }
        else
        {
            System.out.println("Login failed");
            return "redirect:/";
        }
    }
}
