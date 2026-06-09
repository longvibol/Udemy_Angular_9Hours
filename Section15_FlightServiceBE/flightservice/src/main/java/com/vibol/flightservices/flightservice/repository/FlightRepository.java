package com.vibol.flightservices.flightservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vibol.flightservices.flightservice.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {

}
