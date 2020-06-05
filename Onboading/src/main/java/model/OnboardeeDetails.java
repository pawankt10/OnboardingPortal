package model;

import java.util.Date;

import javax.persistence.*;

@Entity

public class OnboardeeDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int OnboardeeKey;
	private String onboardeeId;
	private String name;
	private String contactNo;
	private String emailId;
	private String recruiterID;
	private Date startDate;
	private Date arrivalDate;
	private String demandID;
	private String location;
	private String bgcStatus;
	private String onboardingStatus;
	private String docsStatus;
	
	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(Date arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public OnboardeeDetails() {
		super();
	}

	public String getOnboardeeID() {
		return onboardeeId;
	}

	public void setOnboardeeID(String onboardeeID) {
		onboardeeId = onboardeeID;
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

	@Override
	public String toString() {
		return "OnboardeeDetails [OnboardeeKey=" + OnboardeeKey + ", onboardeeId=" + onboardeeId + ", name=" + name
				+ ", contactNo=" + contactNo + ", emailId=" + emailId + ", recruiterID=" + recruiterID + ", startDate="
				+ startDate + ", arrivalDate=" + arrivalDate + ", demandID=" + demandID + ", location=" + location
				+ ", bgcStatus=" + bgcStatus + ", onboardingStatus=" + onboardingStatus + ", docsStatus=" + docsStatus
				+ "]";
	}
}
