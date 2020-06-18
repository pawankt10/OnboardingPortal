package controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import dao.DemandDao;
import model.DemandDetails;

@CrossOrigin(origins= {"http://localhost:4200", "http://localhost:9876"})
@RestController
public class DemandController {
	
	@Autowired
    private DemandDao demandRepo;
	
	private final static Logger log = Logger.getLogger(LoginController.class.getName());
	
	// *** fetching all the current demand openings ***

	@GetMapping(value = "/demand")
	public List<DemandDetails> fetchDemandID() {
		log.info("GET request received for all demands");
		return demandRepo.findAll();
	}

}
