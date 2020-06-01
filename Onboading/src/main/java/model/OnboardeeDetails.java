package model;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity

public class OnboardeeDetails {

	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String OnboardeeID;
	private String name;
	private String contactNo;
	private String emailId;
	private String demandID;
	private String location;
	private String bgcStatus;
	private String onboardingStatus;
	private String docsStatus;
	
	public OnboardeeDetails() {
		super();
	}

	public String getOnboardeeID() {
		return OnboardeeID;
	}

	public void setOnboardeeID(String onboardeeID) {
		OnboardeeID = onboardeeID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getDemandID() {
		return demandID;
	}

	public void setDemandID(String demandID) {
		this.demandID = demandID;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getBgcStatus() {
		return bgcStatus;
	}

	public void setBgcStatus(String bgcStatus) {
		this.bgcStatus = bgcStatus;
	}

	public String getOnboardingStatus() {
		return onboardingStatus;
	}

	public void setOnboardingStatus(String onboardingStatus) {
		this.onboardingStatus = onboardingStatus;
	}

	public String getDocsStatus() {
		return docsStatus;
	}

	public void setDocsStatus(String docsStatus) {
		this.docsStatus = docsStatus;
	}

	@Override
	public String toString() {
		return "OnboardeeDetails [OnboardeeID=" + OnboardeeID + ", name=" + name + ", contactNo=" + contactNo
				+ ", emailId=" + emailId + ", demandID=" + demandID + ", location=" + location + ", bgcStatus="
				+ bgcStatus + ", onboardingStatus=" + onboardingStatus + ", docsStatus=" + docsStatus + "]";
	}
		
}
