import { Injectable } from '@angular/core';
import { LoginService } from './data/login.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private login: LoginService,
    private http: HttpClient) { }

  // employeeCode=''
  // password=''
  invalidUser: boolean

  authenticate(eID, password) {
    this.invalidUser = true
    //console.log(this.login.executeLogin());
    return this.http.post('http://localhost:8080/details', { "empID": eID, "password": password }).pipe(
      map(data => {
        return data;
      })
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }
}
