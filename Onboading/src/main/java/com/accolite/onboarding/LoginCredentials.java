package com.accolite.onboarding;

public class LoginCredentials {

	private String empID;
	private String password;
	
	public LoginCredentials(String empID, String password) {
		this.empID = empID;
		this.password = password;
	}
	
	public void setEmpID(String empID) {
		this.empID = empID;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmpID() {
		return empID;
	}

	public String getPassword() {
		return password;
	}

	@Override
	public String toString() {
		return "LoginCredentials [empID=" + empID + ", password=" + password + "]";
	}

}
