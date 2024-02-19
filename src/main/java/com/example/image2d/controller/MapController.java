package com.example.image2d.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MapController {


    @GetMapping("/index")
    public String showMap(Model model) {
        return "index";
    }
}