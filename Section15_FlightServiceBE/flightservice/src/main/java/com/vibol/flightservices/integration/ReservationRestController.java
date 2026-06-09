package com.vibol.flightservices.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vibol.flightservices.dto.CreateReservationRequest;
import com.vibol.flightservices.flightservice.entities.Flight;
import com.vibol.flightservices.flightservice.entities.Reservation;
import com.vibol.flightservices.flightservice.repository.FlightRepository;

@RestController
public class ReservationRestController {
	
	@Autowired
	FlightRepository flightRepository;
	
	@GetMapping("/flights")
	public List<Flight> findFlights(){
		return flightRepository.findAll();
	}
	
//	@PostMapping("/reservations")
//	public Reservation saveReservation(@RequestBody CreateReservationRequest request) {
//		return flightRepository.save(request);
//	}

}
