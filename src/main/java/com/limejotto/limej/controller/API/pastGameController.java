package com.limejotto.limej.controller.API;

import com.limejotto.limej.service.pastGameService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.limejotto.limej.object.Game;

import java.util.List;
import java.util.ArrayList;

@Controller
@RequestMapping("/pastGames")
@ResponseBody
public class pastGameController {

    @Autowired
    private pastGameService gservice;

    @RequestMapping(method= RequestMethod.POST, produces= "application/json")
    public JSONObject wordLookup(@RequestBody String username)
    {
        List<Game> pastGames = gservice.findPastGames(username);
        for (Game game: pastGames)
        {
            System.out.println(game.getUsername());
            System.out.println(game.getUserWord());
        }
        return null;
    }
}
