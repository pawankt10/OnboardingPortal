import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { FetchOnboardeeService } from '../service/fetch-onboardee.service';
import { AUTHENTICATED_USER } from '../service/authentication.service';

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

  saveOnboardee(data: any) {
    this.fetch.saveOnboardee(data, this.key).subscribe(
      data => console.log(data),
      error => console.log(error));
    console.log(data);
    this.router.navigate([`home/${this.recruiterID}`])
  }

  ngOnInit(): void {
    this.recruiterID = sessionStorage.getItem(AUTHENTICATED_USER)

    this.key = this.route.snapshot.paramMap.get(`id`);
    this.fetch.fetchOnboardee(this.key).subscribe(
      data => {
        console.log(data);
        this.onboardee = data;
        this.myform = this.fb.group(<FormGroup>this.onboardee);
        console.log(this.onboardee);
      },
      error => console.log(error));
  }
}
