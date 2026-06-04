package com.example.countrylayer.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.countrylayer.service.ConvertToUpperCase;
import com.example.countrylayer.service.UpperCaseRequest;

@RestController
@RequestMapping("/api/uppercase")
@CrossOrigin(origins = "*")
public class ConvertToUpperCaseController {
	
	private final ConvertToUpperCase upperCase;
	
	public ConvertToUpperCaseController(ConvertToUpperCase upperCase) {
		this.upperCase = upperCase;
	}
	
	@GetMapping(value = "/hello")
	public String getHello() {
		return "Thanks for using Thinkster, you're awesome ;";
	}
	
	@GetMapping(value = "/hello1", produces = "application/json")
    public Map<String, String> getHelloJson() {
        return Collections.singletonMap("message", "Thanks for using Thinkster, you're awesome ;");
    }
	
	@PostMapping
	public String ToUpperCase(@RequestBody UpperCaseRequest message) {
		return upperCase.convertToUpperCase(message.getMessage());
	}

}
