package resource;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import model.LoginDetails;
import repository.LoginRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class LoginResource {

	   @Autowired
	    private LoginRepository loginRepo;
	   
	    @PostMapping(value="/details") 
	    public LoginDetails getLoginDetails(@RequestBody LoginDetails loginDetails) {
			try {
	    	loginDetails.getEmpID();
			Optional<LoginDetails> cred = loginRepo.findById(loginDetails.getEmpID());
			if(cred!=null) {
				LoginDetails d = cred.get();
				if(loginDetails.getPassword().equals(d.getPassword())) {
					System.out.println("True");
					return d;
				}
			}
			}catch(Exception e) {
				e.printStackTrace();
				return null;	
			}
			System.out.println("False2");
			return null;	
	    }
	    
	    @GetMapping(value = "/home/{id}")
		 public LoginDetails fetchOnboardee(@PathVariable String id) {
			 return loginRepo.findByempID(id);
		 }
	    
	    @GetMapping(value = "home2/{googleId}")
		 public LoginDetails fetchempID(@PathVariable String googleId) {
	    	System.out.println(loginRepo.findBygoogleID(googleId));
			 return loginRepo.findBygoogleID(googleId);
		 }
}