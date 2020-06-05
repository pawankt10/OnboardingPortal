import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddOnboardeeService {

  invalidUser: boolean = false
  constructor(
    private http: HttpClient) { }

  addNewOnboardee(data) {
    console.log(data);
    this.http.post('http://localhost:8080//OnboardeeDetails', data).subscribe(
      response => console.log(response),
      error => console.log("Hello"));
  }
}
