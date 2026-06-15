package com.vibol.flightservices.integration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AngularRoutingController {

    @GetMapping(value = {
            "/flightCheckIn",
            "/flightCheckIn/",
            "/flightCheckIn/{path:[^\\.]*}"
    })
    public String forwardCheckIn() {
        return "forward:/flightCheckIn/index.html";
    }

    @GetMapping(value = {
            "/flightReservation",
            "/flightReservation/",
            "/flightReservation/{path:[^\\.]*}"
    })
    public String forwardReservation() {
        return "forward:/flightReservation/index.html";
    }
}