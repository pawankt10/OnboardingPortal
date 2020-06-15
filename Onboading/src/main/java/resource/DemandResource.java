package resource;

import java.util.List;
import java.util.logging.Logger;

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
	
	private final static Logger log = Logger.getLogger(LoginResource.class.getName());
	
	@GetMapping(value = "/demand")
	public List<DemandDetails> fetchDemandID() {
		log.info("GET request received for all demands");
		return demandRepo.findAll();
	}

}
