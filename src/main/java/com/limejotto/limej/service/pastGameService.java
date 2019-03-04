package com.limejotto.limej.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limejotto.limej.object.Game;
import com.limejotto.limej.repository.gameRepo;

import java.util.List;

/*
 *  Service for operations involving the Game repository.
 */
@Service
public class pastGameService {

    @Autowired
    private gameRepo grepo;

    public List<Game> findPastGames(String username) {
        List<Game> pastGames = grepo.queryForGames(username);
        return pastGames;
    }

    public void insertGameService(Game playedGame){
        grepo.insertGame(playedGame);
    }
}
