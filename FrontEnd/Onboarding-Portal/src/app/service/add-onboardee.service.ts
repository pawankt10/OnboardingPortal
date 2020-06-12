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
    return this.http.put('http://localhost:8080//OnboardeeDetails', data);
  }
}
