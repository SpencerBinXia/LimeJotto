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

    @Autowired
    private loginRegisterService service;

    @RequestMapping(method=RequestMethod.GET)
    public String displayRegister(Model model) {
        model.addAttribute("reginfo", new RegInfo());
        return "register";
    }

}