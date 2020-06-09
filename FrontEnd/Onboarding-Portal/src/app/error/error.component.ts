import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_USER } from '../service/authentication.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
  errorMessage = "Some Error Occurred!! Contact to your Administrator"

  ngOnInit(): void {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

}
