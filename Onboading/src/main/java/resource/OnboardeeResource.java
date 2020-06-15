package resource;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import exception.EntityNotFoundException;
import model.OnboardeeDetails;
import repository.OnboardeeRepository;

@CrossOrigin(origins={"http://localhost:4200", "http://localhost:9876"})
@RestController
public class OnboardeeResource {

	@Autowired
    private OnboardeeRepository onboardeeRepo;
	
	 private final static Logger log = Logger.getLogger(LoginResource.class.getName());
	 
	 @PutMapping(value = "/OnboardeeDetails")
	    public OnboardeeDetails addOnboardeeDetails(@RequestBody OnboardeeDetails details) {	
		 log.info("PUT request received to add onboardee in list");
		 try {
			 if(onboardeeRepo.existsById(details.getOnboardeeKey()))
				 return onboardeeRepo.save(details);
			 else {
				 log.info("The requested entity does not exist");
				 throw new EntityNotFoundException();
			 }
		 }catch(EntityNotFoundException e) {
			 log.info("Exception occurred with message "+ e.getMessage());
			 return null;
		 }
	    }
	 
	 @GetMapping(value = "/onboardeeList")
	 public List<OnboardeeDetails> fetchAllOnboardeeDetails() {
		    log.info("GET request received for all onboardee details");
	    	return onboardeeRepo.findAll();
	 }
	 
	 @GetMapping(value = "/view/{id}")
	 public Optional<OnboardeeDetails> fetchOnboardee(@PathVariable int id) {
		 log.info("GET request received for onboardee details");
		 try {
			 if(onboardeeRepo.existsById(id))
				 return onboardeeRepo.findById(id);
			 else {
				 log.info("The requested entity does not exist");
				 throw new EntityNotFoundException();
			 }
		 }catch(EntityNotFoundException e) {
			 log.info("Exception occurred with message "+ e.getMessage());
			 return null;
		 }
	 }
	 
	 @PostMapping(value = "/edit/{id}")
	 public void saveOnboardee(@PathVariable int id, @RequestBody OnboardeeDetails details) { 
		 log.info("POST request received for update onboardee details");
		 try {
			 if(onboardeeRepo.existsById(id))
				 onboardeeRepo.save(details);
			 else {
				 log.info("The requested entity does not exist");
				 throw new EntityNotFoundException();
			 }
		 }catch(EntityNotFoundException e) {
			 log.info("Exception occurred with message "+ e.getMessage());
		 }
	 }
	 
	 @DeleteMapping(value = "/delete/{id}")
	 public void deleteOnboardee(@PathVariable int id) {			
			log.info("Delete request received for delete an onboardee details");
			 try {
				 if(onboardeeRepo.existsById(id))
					 onboardeeRepo.deleteById(id);
				 else {
					 log.info("The requested entity does not exist");
					 throw new EntityNotFoundException();
				 }
			 }catch(EntityNotFoundException e) {
				 log.info("Exception occurred with message "+ e.getMessage());
			 }	
	 }
	 
	 @GetMapping(value = "/count/{location}")
	 public int fetchCountLocation(@PathVariable String location) {
		 log.info("GET request received for fetch location headcount");
		 return onboardeeRepo.countBylocation(location);
	 }
	 
	 @GetMapping(value = "/search/id")
	 public Optional<OnboardeeDetails> searchDemandById(@RequestParam String id){
		 log.info("GET request received for search particular onboardee");
		 Optional<OnboardeeDetails> obj = onboardeeRepo.findByOnboardeeid(id);
		 return obj;
	 } 
	 
}
