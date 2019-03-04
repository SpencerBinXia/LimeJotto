package com.limejotto.limej.controller;

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
@RequestMapping("/logout")
public class logoutController {

    @RequestMapping(method= RequestMethod.GET)
    public String logoutUser(HttpSession session)
    {
        session.setAttribute("username", null);
        return "redirect:/";
    }
}
