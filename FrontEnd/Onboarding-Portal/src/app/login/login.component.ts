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
  ) {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  employeeCode = ''
  password = ''
  invalidLogin: boolean = false
  loginRecord: any
  error: boolean

  handleLogin() {
    this.authenticate.authenticate(this.employeeCode, this.password).subscribe(
      data => {
        if (data) {
          this.loginRecord = data
          console.log(this.loginRecord)
          this.invalidLogin = false
          sessionStorage.setItem(AUTHENTICATED_USER, this.employeeCode);
          this.router.navigate([`home/${this.loginRecord.empID}`])
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
        console.log(email);
        var domain = email.split("@");
        console.log(domain[1]);
        if (domain[1] == "accoliteindia.com") {

          this.authenticate.getEmployeeId(userData.id).subscribe(
            data => {
              console.log('works');

              this.loginRecord = data != null ? data : { empID: 'INT406' };
              console.log(this.loginRecord);

              sessionStorage.setItem(AUTHENTICATED_USER, this.loginRecord.empID);
              this.router.navigate([`home/${this.loginRecord.empID}`])

            },
            error => console.log(error)
          );
        }
        else {
          console.log('else');
          this.invalidLogin = true;
        }
      });
  }

  close() {
    this.invalidLogin = false
  }

  ngOnInit(): void {

  }
}