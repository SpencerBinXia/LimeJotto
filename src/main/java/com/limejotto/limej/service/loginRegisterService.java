package com.limejotto.limej.service;

import javax.servlet.http.HttpSession;

import com.limejotto.limej.object.RegInfo;
import com.limejotto.limej.object.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limejotto.limej.repository.userRepo;

@Service
public class loginRegisterService {

    @Autowired
    private userRepo repo;

    public boolean registerUser(RegInfo reg, HttpSession session) {
        User existing = repo.findByName(reg.getUsername());
        if (existing == null) {
            User newUser = new User();
            newUser.setUsername(reg.getUsername());
            newUser.setPassword(reg.getPassword());
            repo.regUser(newUser);
            session.setAttribute("currentUser", newUser);
            return true;
        }
        return false;
    }
}
