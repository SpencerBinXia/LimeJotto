package com.limejotto.limej.repository;

import com.limejotto.limej.object.User;
import com.limejotto.limej.object.RegInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * User repository which queries the user table in the database.
 */
@Repository
public class userRepo {

    @Autowired
    JdbcTemplate jdbc;

    public User findByName(String username)
    {
        String findUser ="SELECT * FROM user WHERE user_name='" + username + "';";
        User tempuser = new User();
        try
        {
            jdbc.queryForObject(findUser, new RowMapper<User>() {
                public User mapRow(ResultSet rs, int rowNum) throws SQLException {
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

    public User findByNameAndPass(RegInfo log)
    {
        String loginUser ="SELECT * FROM user WHERE user_name='" + log.getUsername() + "' AND user_password= '" + log.getPassword() + "';";
        User tempuser = new User();
        try
        {
            jdbc.queryForObject(loginUser, new RowMapper<User>() {
                public User mapRow(ResultSet rs, int rowNum) throws SQLException {
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

    public void regUser(User newUser)
    {
        jdbc.update("INSERT INTO user(user_name, user_password)" + "VALUES(?,?)", newUser.getUsername(), newUser.getPassword());
    }

}
