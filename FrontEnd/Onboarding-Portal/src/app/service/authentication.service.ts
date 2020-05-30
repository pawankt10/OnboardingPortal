import { Injectable } from '@angular/core';
import { LoginService } from './data/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private login: LoginService) {}

  employeeCode=''
  password=''

  authenticate(eID, password) {
    console.log(this.login.executeLogin());
    this.login.executeLogin().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleError(error))
      if(this.employeeCode===eID && this.password===password) {
        return true;
      }
      return false;
    }

  handleSuccessfulResponse(response){
    this.employeeCode = response.empID
    this.password = response.password
    console.log(this.employeeCode, this.password);
  }

  handleError(error){

  }
  
}
