package com.limejotto.limej.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


import com.limejotto.limej.service.pastGameService;

import com.limejotto.limej.object.Game;

import java.util.List;
import java.util.ArrayList;


import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/profile")
public class profileController {

    @Autowired
    private pastGameService gservice;

    @GetMapping
    public String home(Model model, HttpSession session)
    {
        System.out.println((String)session.getAttribute("username"));
        List<Game> pastGames = gservice.findPastGames((String)session.getAttribute("username"));
        for (Game game: pastGames)
        {
            System.out.println(game);
            System.out.println(game.getUsername());
            System.out.println(game.getUserWord());
            System.out.println(game.getGameTime());
        }

        model.addAttribute("pastGames", pastGames);

        return "profile";
    }

}
