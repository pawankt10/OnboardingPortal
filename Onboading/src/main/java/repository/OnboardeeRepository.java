package repository;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.OnboardeeDetails;

@Repository
public interface OnboardeeRepository extends JpaRepository<OnboardeeDetails, Integer> {

	int countBylocation(String location);

	@Query("select * from OnboardeeDetails")
	List<OnboardeeDetails> findByonboardeeId(String onboardeeId);

}
