package controller;

import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dao.LoginDao;
import exception.EntityNotFoundException;
import model.LoginDetails;


@CrossOrigin(origins={"http://localhost:4200", "http://localhost:9876"})
@RestController
public class LoginController {

	   @Autowired
	    private LoginDao loginRepo;
	   
	    private final static Logger log = Logger.getLogger(LoginController.class.getName());
	   
		// *** checking credentials and response employee details ***

	    @PostMapping(value="/details") 
	    public LoginDetails getLoginDetails(@RequestBody LoginDetails loginDetails) {
	    	Optional<LoginDetails> cred = null;
	    	log.info("Post request received for logging in");
	    	try {
	    		cred = loginRepo.findById(loginDetails.getEmpID());
				if(cred.isPresent()) {
					System.out.println("Wrong Password");
					LoginDetails d = cred.get();
					if(loginDetails.getPassword().equals(d.getPassword())) {
						return d;
					}
					else {
						throw new EntityNotFoundException();
					}
				}
	    	}catch(EntityNotFoundException e) {
	    		log.info("Exception occurred with message "+ e.getMessage());
	    	}
			return null;	
	    }
	    
		// *** fetching logged in employee details by employee Id ***

	    @GetMapping(value = "/home/{id}")
		 public LoginDetails fetchOnboardee(@PathVariable String id) {
	    	log.info("GET request received for onboardee with employee ID: "+ id);
	    	return loginRepo.findByempID(id);
		 }
	    
			// *** fetching logged in employee details by google Id ***

	    @GetMapping(value = "home2/{googleId}")
		 public LoginDetails fetchempID(@PathVariable String googleId) {
	    	log.info("GET request received for onboardee with google ID: "+ googleId);
	    	return loginRepo.findBygoogleID(googleId);
		 }
}