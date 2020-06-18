import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, MinLengthValidator } from '@angular/forms'
import { AddOnboardeeService } from '../../service/add-onboardee.service';
import { FetchOnboardeeService } from '../../service/fetch-onboardee.service';
import { AUTHENTICATED_USER } from '../../service/authentication.service';

@Component({
  selector: 'app-onboardee',
  templateUrl: './onboardee.component.html',
  styleUrls: ['./onboardee.component.css']
})
export class OnboardeeComponent implements OnInit {

  myform: FormGroup;
  date: Date = new Date();
  start: String = "2020-06-18"
  end: String = "2020-06-19"
  today: String
  demandList: any;
  demandIdList: any;
  recruiterID: String;

  constructor(
    private router: Router,
    private onboardee: AddOnboardeeService,
    private fb: FormBuilder,
    private fetch: FetchOnboardeeService
  ) { }

  // *** send form data to save into database ***

  handleNewOnboardee(data) {
    console.log(data);
    this.onboardee.addNewOnboardee(data).subscribe(
      () => this.router.navigate([`home/${this.recruiterID}`])
    );
  }

  // *** requesting to fetch all the current demands ***

  fetchDemandList() {
    this.fetch.fetchDemandList().subscribe(
      data => {
        this.demandList = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }

  ngOnInit(): void {

    this.fetchDemandList();

    this.recruiterID = sessionStorage.getItem(AUTHENTICATED_USER)

    this.myform = this.fb.group({
      name: new FormControl('', [Validators.required]),
      onboardeeID: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      demandID: new FormControl('', [Validators.required]),
      recruiterID: new FormControl(this.recruiterID, [Validators.required]),
      docsStatus: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      onboardingStatus: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      bgcStatus: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      arrivalDate: new FormControl('', [Validators.required]),
    });
  }

}
