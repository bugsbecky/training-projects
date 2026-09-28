package com.carsharing.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;


@RestController
@RequestMapping("/api/cars")
public class CarSharingController {

    private static final Logger log = LoggerFactory.getLogger(CarSharingController.class);

    @GetMapping
    public String getAvailableCars() {
        log.info("hi");
        return "HALLOOOOO FROM BACKEND!!!";
    }

}