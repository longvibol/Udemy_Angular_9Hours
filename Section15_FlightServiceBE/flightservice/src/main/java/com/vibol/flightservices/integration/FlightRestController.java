package com.vibol.flightservices.integration;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vibol.flightservices.flightservice.entities.Flight;
import com.vibol.flightservices.flightservice.repository.FlightRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/flights")
public class FlightRestController {

	private final FlightRepository flightRepository;

	// Constructor injection (Preferred over @Autowired on fields)
	public FlightRestController(FlightRepository flightRepository) {
		this.flightRepository = flightRepository;
	}

	// 1. CREATE
	@PostMapping
	public ResponseEntity<Flight> createFlight(@RequestBody Flight flight) {
		Flight savedFlight = flightRepository.save(flight);
		return new ResponseEntity<>(savedFlight, HttpStatus.CREATED);
	}

	// 2. READ ALL
	@GetMapping
	public ResponseEntity<List<Flight>> getAllFlights() {
		List<Flight> flights = flightRepository.findAll();
		return ResponseEntity.ok(flights);
	}

	// 3. READ ONE BY ID
	@GetMapping("/{id}")
	public ResponseEntity<Flight> getFlightById(@PathVariable Integer id) {
		return flightRepository.findById(id)
				.map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.notFound().build());
	}

	// 4. SEARCH FLIGHTS
	@GetMapping("/search")
	public List<Flight> findFlights(
	        @RequestParam(required = false) String from,
	        @RequestParam(required = false) String to,
	        @RequestParam(required = false)
	        @DateTimeFormat(pattern = "MM-dd-yyyy") LocalDate departureDate) {

	    return flightRepository.findFlights(from, to, departureDate);
	}


	// 5. UPDATE
	@PutMapping("/{id}")
	public ResponseEntity<Flight> updateFlight(@PathVariable Integer id, @RequestBody Flight flightDetails) {
		return flightRepository.findById(id)
				.map(existingFlight -> {
					existingFlight.setFlightNumber(flightDetails.getFlightNumber());
					existingFlight.setOperatingAirlines(flightDetails.getOperatingAirlines());
					existingFlight.setDepartureCity(flightDetails.getDepartureCity());
					existingFlight.setArrivalCity(flightDetails.getArrivalCity());
					existingFlight.setDateOfDeparture(flightDetails.getDateOfDeparture());
					existingFlight.setEstimatedDepartureTime(flightDetails.getEstimatedDepartureTime());
					
					Flight updatedFlight = flightRepository.save(existingFlight);
					return ResponseEntity.ok(updatedFlight);
				})
				.orElseGet(() -> ResponseEntity.notFound().build());
	}

	// 6. DELETE
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteFlight(@PathVariable Integer id) {
		if (!flightRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		flightRepository.deleteById(id);
		return ResponseEntity.noContent().build(); // Returns a 204 No Content status
	}
}