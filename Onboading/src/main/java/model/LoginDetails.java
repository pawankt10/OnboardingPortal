package model;

import javax.persistence.*;

@Entity
@Table(name="LoginDetails")
public class LoginDetails {
	
	@Id
	@GeneratedValue
	
	@Column( name="Employee_ID" )
	private String empID;
	@Column( name="Password" )
	private String password;
	
	public LoginDetails() {
		
	}
	public String getEmpID() {
		return empID;
	}
	public void setEmpID(String empID) {
		this.empID = empID;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "loginDetails [empID=" + empID + ", password=" + password + "]";
	}
	
}
