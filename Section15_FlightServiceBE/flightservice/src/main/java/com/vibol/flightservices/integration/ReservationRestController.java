package com.vibol.flightservices.integration;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
@RequestMapping("/reservations") 
public class ReservationRestController {
	
	@Autowired
	FlightRepository flightRepository;
	
	@Autowired
	PassengerRepository passengerRepository;
	
	@Autowired
	ReservationRepository reservationRepository;
	
	// --- CREATE ---
	@PostMapping
	@Transactional
	public Reservation saveReservation(@RequestBody CreateReservationRequest request) {
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
		
		return reservationRepository.save(reservation);
	}
	
	// --- READ ALL ---
	@GetMapping
	public List<Reservation> findAllReservations() {
		return reservationRepository.findAll();
	}
	
	// --- READ BY ID ---
	@GetMapping("/{id}")
	public ResponseEntity<Reservation> findReservation(@PathVariable int id) {
		return reservationRepository.findById(id)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
	
	// --- UPDATE ---
	@PutMapping("/{id}")
	public ResponseEntity<Reservation> updateReservation(@PathVariable int id, @RequestBody UpdateReservationRequest request) {
		return reservationRepository.findById(id)
				.map(reservation -> {
					reservation.setNumberOfBags(request.getNumberOfBags());
					reservation.setCheckedIn(request.isCheckIn());
					Reservation updated = reservationRepository.save(reservation);
					return ResponseEntity.ok(updated);
				})
				.orElse(ResponseEntity.notFound().build());
	}
	
	// --- DELETE ---
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteReservation(@PathVariable int id) {
		return reservationRepository.findById(id)
				.map(reservation -> {
					reservationRepository.delete(reservation);
					return ResponseEntity.noContent().<Void>build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
	

	// --- OTHER ENDPOINTS (FLIGHTS) ---
		@GetMapping("/flights")
		public List<Flight> findFlights(
		        @RequestParam(required = false) String from,
		        @RequestParam(required = false) String to,
		        @RequestParam(required = false)
		        @DateTimeFormat(pattern = "MM-dd-yyyy") LocalDate departureDate) {

		    return flightRepository.findFlights(from, to, departureDate);
		}
	
	@PostMapping("/addflight")
	public String addFlight(@RequestBody Flight flight) {
		flightRepository.save(flight);
		return "Add Flight Successful";
	}
}