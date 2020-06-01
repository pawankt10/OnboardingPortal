package model;

import javax.persistence.*;

@Entity
public class LoginDetails {
	
	@Id
	private String empID;
	private String password;
	
	public LoginDetails() {
		
	}
	@Column(name="Employee_ID")
	public String getEmpID() {
		return empID;
	}
	public void setEmpID(String empID) {
		this.empID = empID;
	}
	
	@Column(name="Password")
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
