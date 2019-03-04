package com.limejotto.limej.service;

import javax.servlet.http.HttpSession;

import com.limejotto.limej.object.RegInfo;
import com.limejotto.limej.object.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.limejotto.limej.repository.userRepo;

/*
 *  Service for operations involving the User repository.
 */
@Service
public class loginRegisterService {

    @Autowired
    private userRepo urepo;

    public boolean registerUser(RegInfo reg, HttpSession session) {
        User existing = urepo.findByName(reg.getUsername());
        if (existing == null) {
            User newUser = new User();
            newUser.setUsername(reg.getUsername());
            newUser.setPassword(reg.getPassword());
            urepo.regUser(newUser);
            return true;
        }
        return false;
    }

    public boolean loginUser (RegInfo log){
        User existing = urepo.findByNameAndPass(log);
        if (existing != null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
