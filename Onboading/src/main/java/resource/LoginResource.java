package resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import model.LoginDetails;
import repository.LoginRepository;

@RestController
public class LoginResource {

	   @Autowired
	    private LoginRepository loginRepo;
	   
	   @GetMapping(value = "/test")
	    public String test() {
	    	System.out.println("Running");
	        return "Done"; 
	    }
	   
	    @GetMapping(value = "/details")
	    public List<LoginDetails> getDetails() {
	    	System.out.println("Running");
//	    	LoginDetails a = new LoginDetails();
//	    	a.setPassword("pawan");
//	    	a.setEmpID("kumar");
//	    	loginRepo.save(a);
	        return (List<LoginDetails>) loginRepo.findAll();
	    }

//	    @PostMapping(value = "/load")
//	    public List<LoginDetails> addDeatais(){
//	        loginRepo.save(loginDetails);
// 	        return (List<LoginDetails>) loginRepo.findAll();
//	    }
}