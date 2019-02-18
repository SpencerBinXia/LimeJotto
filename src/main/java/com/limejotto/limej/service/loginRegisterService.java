package com.limejotto.limej.service;

import java.time.LocalDateTime;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limejotto.limej.object.user;
import com.limejotto.limej.object.regInfo;
import com.limejotto.limej.repository.userRepo;

@Service
public class loginRegisterService {

    @Autowired
    private userRepo repo;

    public boolean registerUser(regInfo reg, HttpSession session) {
        user existing = repo.findByName(reg.getUsername());
        if (existing == null) {
            user newUser = new user();
            newUser.setUsername(reg.getUsername());
            newUser.setPassword(reg.getPassword());
            repo.regUser(newUser);
            session.setAttribute("currentUser", newUser);
            return true;
        }
        return false;
    }
}
