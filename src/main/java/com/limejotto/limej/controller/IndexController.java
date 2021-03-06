package com.limejotto.limej.controller;

import com.limejotto.limej.object.RegInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/")
public class IndexController {

    /*
        this method is mapped to the front page and returns index.html
     */
    @GetMapping
    public String home(Model model, HttpSession session)
    {
        if (session.getAttribute("username") != null)
        {
            return "redirect:/game";
        }
        else
        {
            model.addAttribute("loginfo", new RegInfo());
            return "index";
        }
    }


    /*
        when the mapping /game is made we return game.html
     */

}
