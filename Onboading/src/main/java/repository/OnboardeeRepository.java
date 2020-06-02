package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.OnboardeeDetails;

@Repository
public interface OnboardeeRepository extends JpaRepository<OnboardeeDetails, Integer> {

}
