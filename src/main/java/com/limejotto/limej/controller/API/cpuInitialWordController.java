package com.limejotto.limej.controller.API;

import com.limejotto.limej.object.Word;
import com.limejotto.limej.service.wordService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/initialWord")
public class cpuInitialWordController {
    @Autowired
    wordService wservice;

    @RequestMapping(method=RequestMethod.GET)
    public String randomWord(HttpServletResponse response)
    {
        response.setContentType("text/plain;charset=UTF-8");
        return wservice.randomWord();
    }
}
