package resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
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
	    public OnboardeeDetails addOnboardeeDetails(@RequestBody OnboardeeDetails details) {
	    	System.out.println(details);
	    	return onboardeeRepo.save(details);
	    }
	 
	 @GetMapping(value = "/onboardeeList")
	 public List<OnboardeeDetails> fetchOnboardeeDetails() {
	    	return onboardeeRepo.findAll();
	    }
	 
	 @GetMapping(value = "/view/{id}")
	 public Optional<OnboardeeDetails> fetchOnboardee(@PathVariable int id) {
		 return onboardeeRepo.findById(id);
	 }
	 
	 @PostMapping(value = "/edit/{id}")
	 public void saveOnboardee(@PathVariable int id, @RequestBody OnboardeeDetails details) { 
		 onboardeeRepo.save(details);
	 }
	 
	 @DeleteMapping(value = "/delete/{id}")
	 public void deleteOnboardee(@PathVariable int id) {
		 System.out.println(id+" Hello");
			onboardeeRepo.deleteById(id);
	    }
	 
	 @GetMapping(value = "/count/{location}")
	 public int fetchCountLocation(@PathVariable String location) {
		 System.out.println(onboardeeRepo.countBylocation(location)+" Hello");
		 return onboardeeRepo.countBylocation(location);
	 }
	
}
