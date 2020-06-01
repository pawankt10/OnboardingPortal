package repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.LoginDetails;

@Repository
public interface LoginRepository extends JpaRepository<LoginDetails, String>{
	
}
