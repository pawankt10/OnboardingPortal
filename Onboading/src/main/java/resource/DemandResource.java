package resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import model.DemandDetails;
import repository.DemandRepository;

@CrossOrigin(origins= {"http://localhost:4200", "http://localhost:9876"})
@RestController
public class DemandResource {
	
	@Autowired
    private DemandRepository demandRepo;
	
	@GetMapping(value = "/demand")
	public List<DemandDetails> fetchDemandID() {
		 return demandRepo.findAll();
		
	}

}
