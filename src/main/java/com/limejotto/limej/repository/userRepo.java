package com.limejotto.limej.repository;

import com.limejotto.limej.object.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * User repository which queries the database for information.
 */
@Repository
public class userRepo {

    @Autowired
    JdbcTemplate jdbc;

    public user findByName(String username)
    {
        String findUser ="SELECT * FROM user WHERE user_name='" + username + "';";
        user tempuser = new user();
        try
        {
            jdbc.queryForObject(findUser, new RowMapper<user>() {
                public user mapRow(ResultSet rs, int rowNum) throws SQLException {
                    tempuser.setUsername(rs.getString("user_name"));
                    tempuser.setPassword(rs.getString("user_password"));
                    return tempuser;
                }
            });
        }
        catch (Exception e)
        {
            return null;
        }
        return tempuser;
    }

    public void regUser(user newUser)
    {
        jdbc.update("INSERT INTO user(user_name, user_password)" + "VALUES(?,?)", newUser.getUsername(), newUser.getPassword());
    }

}
