package model;

import javax.persistence.*;

@Entity
public class LoginDetails {
	
	@Id
	private String empID;
	private String name;
	private String password;
	private String emailID;
	private String department;
	private String googleID;
	
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
	
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGoogleID() {
		return googleID;
	}

	public void setGoogleID(String googleID) {
		this.googleID = googleID;
	}

	@Override
	public String toString() {
		return "LoginDetails [empID=" + empID + ", name=" + name + ", password=" + password + ", emailID=" + emailID
				+ ", department=" + department + ", googleID=" + googleID + "]";
	}

	public LoginDetails(String empID, String name, String password, String emailID, String department,
			String googleID) {
		this.empID = empID;
		this.name = name;
		this.password = password;
		this.emailID = emailID;
		this.department = department;
		this.googleID = googleID;
	}
	
}
