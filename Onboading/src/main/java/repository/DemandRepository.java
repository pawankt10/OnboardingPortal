package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.DemandDetails;

public interface DemandRepository extends JpaRepository<DemandDetails, String>{

}
