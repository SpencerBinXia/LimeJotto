package com.limejotto.limej.repository;

import com.limejotto.limej.object.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.limejotto.limej.object.Word;

/**
 * User repository which queries the database for information.
 */
@Repository
public class wordRepo {

    @Autowired
    JdbcTemplate jdbc;

    public boolean findWord(String word)
    {
        Word tempword =new Word();
        String wordQuery ="SELECT * FROM Wordbank WHERE Word='" + word + "';";
        try
        {
            jdbc.queryForObject(wordQuery, new RowMapper() {
                public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
                    System.out.println(rs.getString(1));
                    tempword.setWord(rs.getString(1));
                    return tempword;
                }
            });
        }
        catch (Exception e)
        {
        }
        if (tempword.getWord() != null && tempword.getWord().equals(word))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
