package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import model.DemandDetails;

public interface DemandDao extends JpaRepository<DemandDetails, String>{

}
