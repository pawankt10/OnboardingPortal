import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class model {
  constructor(public eID: String, public password: String) { }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  executeLogin() {
    return this.http.post('http://localhost:8080/login', {});
  }

}
