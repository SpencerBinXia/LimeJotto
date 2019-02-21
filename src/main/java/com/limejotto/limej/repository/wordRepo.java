package com.limejotto.limej.repository;

import com.limejotto.limej.object.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * User repository which queries the database for information.
 */
@Repository
public class wordRepo {

    @Autowired
    JdbcTemplate jdbc;

    public boolean findWord(String word)
    {
        String wordQuery ="SELECT * FROM Wordbank WHERE Word='" + word + "';";
        try
        {
            jdbc.queryForObject(wordQuery, new RowMapper() {
                public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
                    System.out.println(rs.getString(1));
                    return true;
                }
            });
        }
        catch (Exception e)
        {
            System.out.println("Word not found");
            return false;
        }
        return false;
    }
}
