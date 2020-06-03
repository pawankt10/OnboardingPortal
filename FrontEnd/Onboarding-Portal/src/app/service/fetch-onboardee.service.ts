import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchOnboardeeService {

  constructor(
    private http: HttpClient
  ) { }

  fetchOnboardeeList() {
    return this.http.get('http://localhost:8080/onboardeeList', {});
  }

  fetchOnboardee(id: number) {
    return this.http.get(`http://localhost:8080/view/${id}`);
  }

  saveOnboardee(data: any, id: number) {
    return this.http.post(`http://localhost:8080/edit/${id}`, data);
  }

  fetchCount(data: String) {
    return this.http.get(`http://localhost:8080/count/${data}`);
  }

  fetchLoginDetails(id: String) {
    return this.http.get(`http://localhost:8080/home/${id}`);
  }

}
