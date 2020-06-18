import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
export const AUTHENTICATED_USER = 'validatedUser'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient) { }

  invalidUser: boolean

  authenticate(eID, password) {
    this.invalidUser = true
    return this.http.post('http://localhost:8080/details', { "empID": eID, "password": password }).pipe(
      map(data => {
        return data;
      })
    );
  }

  getEmployeeId(googleID: String) {
    return this.http.get(`http://localhost:8080/home2/${googleID}`);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }
}
