import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { AUTHENTICATED_USER } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authenticate: AuthenticationService,
    private socialAuthService: AuthService
  ) { }

  employeeCode = ''
  password = ''
  invalidLogin: boolean
  error: boolean


  handleLogin() {
    this.authenticate.authenticate(this.employeeCode, this.password).subscribe(
      data => {
        if (data) {
          this.router.navigate(['home'])
          this.invalidLogin = false
        }
        else
          this.invalidLogin = true
      },
      error => console.log(error))
  }

  public signinWithGoogle() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider)
      .then((userData) => {

        console.log(userData);
        const email = userData.email
        var domain = email.split("@");
        if (domain[1] == "accoliteindia.com") {
          this.router.navigate(['home'])
          sessionStorage.setItem(AUTHENTICATED_USER, this.employeeCode);
        }
        else
          this.invalidLogin = true
      });
  }

  close() {
    this.invalidLogin = false
  }

  ngOnInit(): void {

  }
}