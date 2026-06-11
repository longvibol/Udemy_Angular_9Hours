package com.vibol.flightservices.dto;

import java.util.List;
import com.vibol.flightservices.flightservice.entities.Flight;

public class FlightSearchResponse {
    private String message;
    private List<Flight> flights;

    public FlightSearchResponse(String message, List<Flight> flights) {
        this.message = message;
        this.flights = flights;
    }

    // Getters and Setters
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public List<Flight> getFlights() { return flights; }
    public void setFlights(List<Flight> flights) { this.flights = flights; }
}