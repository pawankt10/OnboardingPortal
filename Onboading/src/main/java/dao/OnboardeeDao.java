package dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import model.OnboardeeDetails;

@Repository
public interface OnboardeeDao extends JpaRepository<OnboardeeDetails, Integer> {

	int countBylocation(String location);
	
	@Query("select c from OnboardeeDetails c where onboardeeid= :id")
	Optional<OnboardeeDetails> findByOnboardeeid(String id);


//	@Query("select * from OnboardeeDetails")
//	List<OnboardeeDetails> findByOnboardeeId(String onboardeeId);

}
