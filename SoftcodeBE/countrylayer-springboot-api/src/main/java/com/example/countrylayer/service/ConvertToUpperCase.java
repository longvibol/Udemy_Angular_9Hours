package com.example.countrylayer.service;

import org.springframework.stereotype.Service;

@Service
public class ConvertToUpperCase {

	public String convertToUpperCase(String text) {
		return text.toUpperCase();
	}

}
