package com.vibol.flightservices.flightservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vibol.flightservices.flightservice.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}
