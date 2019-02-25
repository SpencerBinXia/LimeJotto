package com.limejotto.limej.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.limejotto.limej.object.Game;

@Repository
public class gameRepo {

    @Autowired
    JdbcTemplate jdbc;

    public void insertGame(Game newgame)
    {
        jdbc.update("INSERT INTO Games(Game_Date, user_name, user_guesses, cpu_guesses, user_word, cpu_word)" + "VALUES(?,?,?,?,?)",
                     newgame.getGameTime(),newgame.getUsername(),newgame.getUserGuesses(),newgame.getCpuGuesses(),newgame.getUserWord(),newgame.getCpuWord());
    }

    public List<Game> queryForGames(String username)
    {
        String gameQuery = "SELECT * FROM Games WHERE user_name='" + username + "';";
        List<Map<String, Object>> rows = jdbc.queryForList(gameQuery);
        List<Game> pastGames = new ArrayList<Game>();
        rows = jdbc.queryForList(gameQuery);
        for (Map row : rows) {
            Game pastGame = new Game();
            pastGame.setGameTime(LocalDateTime.now());
            pastGame.setUsername((String) row.get("user_name"));
            pastGame.setUsername((String) row.get("user_guesses"));
            pastGame.setUsername((String) row.get("cpu_guesses"));
            pastGame.setUsername((String) row.get("user_name"));
            pastGame.setUsername((String) row.get("user_name"));
            pastGames.add(pastGame);
        }
        return pastGames;
    }
}
