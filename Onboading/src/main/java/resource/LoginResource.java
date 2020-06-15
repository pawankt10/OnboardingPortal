package resource;

import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import exception.EntityNotFoundException;
import model.LoginDetails;
import repository.LoginRepository;


@CrossOrigin(origins={"http://localhost:4200", "http://localhost:9876"})
@RestController
public class LoginResource {

	   @Autowired
	    private LoginRepository loginRepo;
	   
	    private final static Logger log = Logger.getLogger(LoginResource.class.getName());
	   
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
	    
	    @GetMapping(value = "/home/{id}")
		 public LoginDetails fetchOnboardee(@PathVariable String id) {
	    	log.info("GET request received for onboardee with employee ID: "+ id);
	    	return loginRepo.findByempID(id);
		 }
	    
	    @GetMapping(value = "home2/{googleId}")
		 public LoginDetails fetchempID(@PathVariable String googleId) {
	    	log.info("GET request received for onboardee with google ID: "+ googleId);
	    	return loginRepo.findBygoogleID(googleId);
		 }
}