package com.limejotto.limej.controller.API;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.limejotto.limej.service.pastGameService;

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
    public JSONObject wordLookup(@RequestBody Game playedGame)
    {
        gservice.insertGameService(playedGame);
        return null;
    }
}
