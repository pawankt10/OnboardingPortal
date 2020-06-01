import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { AddOnboardeeService } from '../service/add-onboardee.service';

@Component({
  selector: 'app-onboardee',
  templateUrl: './onboardee.component.html',
  styleUrls: ['./onboardee.component.css']
})
export class OnboardeeComponent implements OnInit {

  myform: FormGroup;

  constructor(
    private router: Router,
    private onboardee: AddOnboardeeService,
    private fb: FormBuilder
  ) { }

  handleNewOnboardee(data) {
    console.log(data);
    this.onboardee.addNewOnboardee(data);
    this.router.navigate(['home'])
  }

  ngOnInit(): void {

    this.myform = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.email]),
      OnboardeeID: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required]),
      demandID: new FormControl('', [Validators.required]),
      docsStatus: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required]),
      onboardingStatus: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      bgcStatus: new FormControl('', [Validators.required])
    });
  }

}
