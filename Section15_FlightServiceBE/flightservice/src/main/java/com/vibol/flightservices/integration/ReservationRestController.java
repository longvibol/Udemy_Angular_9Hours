package com.vibol.flightservices.integration;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vibol.flightservices.dto.CreateReservationRequest;
import com.vibol.flightservices.dto.UpdateReservationRequest;
import com.vibol.flightservices.flightservice.entities.Flight;
import com.vibol.flightservices.flightservice.entities.Passenger;
import com.vibol.flightservices.flightservice.entities.Reservation;
import com.vibol.flightservices.flightservice.repository.FlightRepository;
import com.vibol.flightservices.flightservice.repository.PassengerRepository;
import com.vibol.flightservices.flightservice.repository.ReservationRepository;

import jakarta.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/reservations")
public class ReservationRestController {
	
	private final FlightRepository flightRepository;
	private final PassengerRepository passengerRepository;
	private final ReservationRepository reservationRepository;
	
	// Constructor Injection
	public ReservationRestController(FlightRepository flightRepository, 
									 PassengerRepository passengerRepository, 
									 ReservationRepository reservationRepository) {
		this.flightRepository = flightRepository;
		this.passengerRepository = passengerRepository;
		this.reservationRepository = reservationRepository;
	}
	
	// 1. CREATE
	@PostMapping
	@Transactional
	public ResponseEntity<Reservation> saveReservation(@RequestBody CreateReservationRequest request) {
		Flight flight = flightRepository.findById(request.getFlightId())
				.orElseThrow(() -> new RuntimeException("Flight not found"));
				
		Passenger passenger = new Passenger();
		passenger.setFirstName(request.getPassengerFirstName());
		passenger.setLastName(request.getPassengerLastName());
		passenger.setMiddleName(request.getPassengerMiddleName());
		passenger.setEmail(request.getPassengerEmail());
		passenger.setPhone(request.getPassengerPhone());
		
		Passenger savedPassenger = passengerRepository.save(passenger);
		
		Reservation reservation = new Reservation();
		reservation.setFlight(flight);
		reservation.setPassenger(savedPassenger);
		reservation.setCheckedIn(false);
		reservation.setNumberOfBags(1);
		
		Reservation savedReservation = reservationRepository.save(reservation);
		return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
	}
	
	// 2. READ ALL
	@GetMapping
	public ResponseEntity<List<Reservation>> findAllReservations() {
		List<Reservation> reservations = reservationRepository.findAll();
		return ResponseEntity.ok(reservations);
	}
	
	// 3. READ ONE BY ID
	@GetMapping("/{id}")
	public ResponseEntity<Reservation> findReservationById(@PathVariable Integer id) {
		return reservationRepository.findById(id)
				.map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.notFound().build());
	}
	
	// 4. UPDATE
	@PutMapping("/{id}")
	public ResponseEntity<Reservation> updateReservation(@PathVariable Integer id, @RequestBody UpdateReservationRequest request) {
		return reservationRepository.findById(id)
				.map(reservation -> {
					reservation.setNumberOfBags(request.getNumberOfBags());
					reservation.setCheckedIn(request.isCheckIn());
					Reservation updated = reservationRepository.save(reservation);
					return ResponseEntity.ok(updated);
				})
				.orElseGet(() -> ResponseEntity.notFound().build());
	}
	
	// 5. DELETE
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteReservation(@PathVariable Integer id) {
		return reservationRepository.findById(id)
				.map(reservation -> {
					reservationRepository.delete(reservation);
					return ResponseEntity.noContent().<Void>build();
				})
				.orElseGet(() -> ResponseEntity.notFound().build());
	}
}