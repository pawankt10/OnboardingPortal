package com.accolite.onboarding;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Login {

	//Get
	//URI
	//EmpID, Password
//	@GetMapping(path="/login")
//	
//	public String getCredentials() {
//		return "604ACC406";
//	}
	
	@GetMapping(path="/login")
	public LoginCredentials getCredentials() {
		return new LoginCredentials("CS18203011","xyz123");
	}
}
