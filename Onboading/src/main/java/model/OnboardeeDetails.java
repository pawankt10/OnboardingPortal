package model;

import javax.persistence.*;

@Entity

public class OnboardeeDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int OnboardeeKey;
	private String OnboardeeID;
	private String name;
	private String contactNo;
	private String emailId;
	private String recruiterID;
	private String startDate;
	private String arrivalDate;
	private String demandID;
	private String location;
	private String bgcStatus;
	private String onboardingStatus;
	private String docsStatus;
	
	public OnboardeeDetails(int onboardeeKey, String onboardeeID, String name, String contactNo, String emailId,
			String recruiterID, String startDate, String arrivalDate, String demandID, String location,
			String bgcStatus, String onboardingStatus, String docsStatus) {
		OnboardeeKey = onboardeeKey;
		OnboardeeID = onboardeeID;
		this.name = name;
		this.contactNo = contactNo;
		this.emailId = emailId;
		this.recruiterID = recruiterID;
		this.startDate = startDate;
		this.arrivalDate = arrivalDate;
		this.demandID = demandID;
		this.location = location;
		this.bgcStatus = bgcStatus;
		this.onboardingStatus = onboardingStatus;
		this.docsStatus = docsStatus;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public OnboardeeDetails() {
		super();
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

	public int getOnboardeeKey() {
		return OnboardeeKey;
	}

	public void setOnboardeeKey(int onboardeeKey) {
		OnboardeeKey = onboardeeKey;
	}
	
	
	public String getRecruiterID() {
		return recruiterID;
	}

	public void setRecruiterID(String recruiterID) {
		this.recruiterID = recruiterID;
	}

	public String getOnboardeeID() {
		return OnboardeeID;
	}

	public void setOnboardeeID(String onboardeeID) {
		OnboardeeID = onboardeeID;
	}

	@Override
	public String toString() {
		return "OnboardeeDetails [OnboardeeKey=" + OnboardeeKey + ", OnboardeeID=" + OnboardeeID + ", name=" + name
				+ ", contactNo=" + contactNo + ", emailId=" + emailId + ", recruiterID=" + recruiterID + ", startDate="
				+ startDate + ", arrivalDate=" + arrivalDate + ", demandID=" + demandID + ", location=" + location
				+ ", bgcStatus=" + bgcStatus + ", onboardingStatus=" + onboardingStatus + ", docsStatus=" + docsStatus
				+ "]";
	}
}
