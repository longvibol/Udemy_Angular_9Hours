package com.vibol.flightservices.flightservice.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Reservation extends AbstractEntity {
	
	private Boolean checkedIn;
	private int numberOfBags;
	
	// Many reservations can be created by the same passenger over time
	@ManyToOne
	@JoinColumn(name = "passenger_id", nullable = false)
	private Passenger passenger;
	
	// Many reservations can be mapped to the same aircraft/flight instance
	@ManyToOne
	@JoinColumn(name = "flight_id", nullable = false)
	private Flight flight;	
	
	public Passenger getPassenger() {
		return passenger;
	}
	public void setPassenger(Passenger passenger) {
		this.passenger = passenger;
	}
	public Flight getFlight() {
		return flight;
	}
	public void setFlight(Flight flight) {
		this.flight = flight;
	}
	public Boolean getCheckedIn() {
		return checkedIn;
	}
	public void setCheckedIn(Boolean checkedIn) {
		this.checkedIn = checkedIn;
	}
	public int getNumberOfBags() {
		return numberOfBags;
	}
	public void setNumberOfBags(int numberOfBags) {
		this.numberOfBags = numberOfBags;
	}
}