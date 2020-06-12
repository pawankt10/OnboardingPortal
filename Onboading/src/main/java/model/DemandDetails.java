package model;

import javax.persistence.*;

@Entity
public class DemandDetails {
	
	@Id
	private String demandID;
	private String empID;
	private String role;
	private String empType;
	private String experience;
	
	
	public String getDemandID() {
		return demandID;
	}
	public void setDemandID(String demandID) {
		this.demandID = demandID;
	}
	public String getEmpID() {
		return empID;
	}
	public void setEmpID(String empID) {
		this.empID = empID;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmpType() {
		return empType;
	}
	public void setEmpType(String empType) {
		this.empType = empType;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	
	public DemandDetails(String demandID, String empID, String role, String empType, String experience) {
		super();
		this.demandID = demandID;
		this.empID = empID;
		this.role = role;
		this.empType = empType;
		this.experience = experience;
	}
	
	@Override
	public String toString() {
		return "DemandDetails [demandID=" + demandID + ", empID=" + empID + ", role=" + role + ", empType=" + empType
				+ ", experience=" + experience + "]";
	}	
}
