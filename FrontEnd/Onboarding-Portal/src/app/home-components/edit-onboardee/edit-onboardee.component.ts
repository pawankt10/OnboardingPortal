import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { FetchOnboardeeService } from '../../service/fetch-onboardee.service';
import { AUTHENTICATED_USER } from '../../service/authentication.service';

@Component({
  selector: 'app-edit-onboardee',
  templateUrl: './edit-onboardee.component.html',
  styleUrls: ['./edit-onboardee.component.css']
})
export class EditOnboardeeComponent implements OnInit {

  constructor(
    private fetch: FetchOnboardeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  onboardee: any;
  key: any;
  myform: FormGroup;
  recruiterID: String;

  // *** send updated onboardee details to save into database ***

  saveOnboardee(data: any) {
    this.fetch.saveOnboardee(data, this.key).subscribe(
      () => this.router.navigate([`home/${this.recruiterID}`]),
      error => console.log(error));
  }

  // *** requesting to fetch particular onboardee details to edit ***

  fetchOnboardeeDetails() {
    this.fetch.fetchOnboardee(this.key).subscribe(
      data => {
        console.log(data);
        this.onboardee = data;
        this.myform = this.fb.group(<FormGroup>this.onboardee);
        this.myform.controls['startDate'].setValue(this.onboardee.startDate.slice(0, 10));
        this.myform.controls['arrivalDate'].setValue(this.onboardee.arrivalDate.slice(0, 10));
        console.log(this.onboardee);
      },
      error => console.log(error));
  }

  formBuilder() {
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

  ngOnInit(): void {
    this.recruiterID = sessionStorage.getItem(AUTHENTICATED_USER);
    this.formBuilder();
    this.key = this.route.snapshot.paramMap.get(`id`);
    this.fetchOnboardeeDetails();
  }
}
