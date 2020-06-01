package resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import model.OnboardeeDetails;
import repository.OnboardeeRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class OnboardeeResource {

	@Autowired
    private OnboardeeRepository onboardeeRepo;
	
	
	 @PostMapping(value = "/OnboardeeDetails")
	 @ResponseBody
	    public OnboardeeDetails addOnboardeeDetails(@RequestBody OnboardeeDetails details) {
	    	System.out.println(details);
	    	return onboardeeRepo.save(details);
	    }
	 
	
}
