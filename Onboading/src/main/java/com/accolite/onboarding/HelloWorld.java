package com.accolite.onboarding;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {

	@GetMapping(path="/home")
	
	public String showdata() {
		return "Hello World";
	}
	
	
}
