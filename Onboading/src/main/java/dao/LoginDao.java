package dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.LoginDetails;

@Repository
public interface LoginDao extends JpaRepository<LoginDetails, String>{

	LoginDetails findByempID(String id);

	LoginDetails findBygoogleID(String googleID);
}
