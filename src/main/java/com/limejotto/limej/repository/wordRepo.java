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
 * Word repository which queries the database for words in the Wordbank table.
 */
@Repository
public class wordRepo {

    @Autowired
    JdbcTemplate jdbc;


    public boolean findWord(String word)
    {
        Word tempword =new Word();
        String wordQuery ="SELECT * FROM Wordbank WHERE Word='" + word + "';";
        queryForWord(tempword, wordQuery);
        if (tempword.getWord() != null && tempword.getWord().equals(word))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public String randomInitialWord()
    {
        Word tempword =new Word();
        String wordQuery ="SELECT * FROM Wordbank ORDER BY RAND() LIMIT 1;";
        queryForWord(tempword, wordQuery);
        return tempword.getWord();

    }

    private void queryForWord(Word tempword, String wordQuery) {

        try {
            jdbc.queryForObject(wordQuery, new RowMapper<Word>() {
                public Word mapRow(ResultSet rs, int rowNum) throws SQLException {
                    System.out.println(rs.getString(1));
                    tempword.setWord(rs.getString(1));
                    return tempword;
                }
            });
        } catch (Exception e) {
        }
    }

    public Word guessWord(String regex) {
        Word tempword = new Word();
        String guessQuery = "SELECT Word FROM Wordbank WHERE (Word REGEXP " + regex + ") ORDER BY RAND() LIMIT 1";
        queryForWord(tempword, guessQuery);
        return tempword;
    }

    /**
    public List<Word> guessWord(String regex) {
        String guessQuery = "SELECT Word FROM Wordbank WHERE (Word REGEXP " + regex + ")";
        List<Map<String, Object>> rows = jdbc.queryForList(guessQuery);
        List<Word> cpuWords = new ArrayList<Word>();
        rows = jdbc.queryForList(guessQuery);
        for (Map row : rows) {
            Word tempword = new Word();
            tempword.setWord((String) row.get("Word"));
            cpuWords.add(tempword);
        }
        return cpuWords;
    }
     **/
}

