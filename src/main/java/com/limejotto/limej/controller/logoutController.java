package com.limejotto.limej.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

/*
 *  Controller that logs out the user and removes their username from the session.
 */
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
