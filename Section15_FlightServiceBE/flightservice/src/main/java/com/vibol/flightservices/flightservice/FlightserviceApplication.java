package com.vibol.flightservices.flightservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
	    "com.vibol.flightservices.flightservice",
	    "com.vibol.flightservices.integration"
	})
public class FlightserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightserviceApplication.class, args);
	}

}
