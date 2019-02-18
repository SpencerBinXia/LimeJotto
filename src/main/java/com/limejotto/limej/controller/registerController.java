package com.limejotto.limej.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.limejotto.limej.service.loginRegisterService;
import com.limejotto.limej.object.user;
import com.limejotto.limej.object.regInfo;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/register")
public class registerController {

    //@GetMapping
    @Autowired
    private loginRegisterService service;

    @RequestMapping(method=RequestMethod.GET)
    public String displayRegister(Model model) {
        model.addAttribute("reginfo", new regInfo());
        return "register";
    }

    @RequestMapping(method=RequestMethod.POST)
    public String registerUser(@ModelAttribute regInfo reginfo, HttpSession session)
    {
        service.registerUser(reginfo, session);
        return "redirect:/submitRegistration";
    }
}