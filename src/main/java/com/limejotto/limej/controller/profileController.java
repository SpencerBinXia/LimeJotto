package com.limejotto.limej.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.limejotto.limej.service.pastGameService;
import com.limejotto.limej.object.Game;

import java.util.List;
import javax.servlet.http.HttpSession;

/*
 *  Controller that renders the user's Profile page and retrieves their past games.
 */
@Controller
@RequestMapping("/profile")
public class profileController {

    @Autowired
    private pastGameService gservice;

    @GetMapping
    public String home(Model model, HttpSession session)
    {
        if (session.getAttribute("username") == null)
        {
            return "redirect:/";
        }
        List<Game> pastGames = gservice.findPastGames((String)session.getAttribute("username"));

        model.addAttribute("pastGames", pastGames);

        return "profile";
    }

}
