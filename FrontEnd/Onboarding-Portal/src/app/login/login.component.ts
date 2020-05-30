import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authenticate: AuthenticationService,
    private socialAuthService: AuthService
    ) {}

  employeeCode=''
  password=''
  invalidLogin :boolean
  error :boolean


  handleLogin() {
    //  console.log(this.employeeCode);
    //  console.log(this.password);
    // console.log(this.login.executeLogin());
    // this.login.executeLogin().subscribe(
    //   response => this.handleSuccessfulResponse(response)
      // response => { this.employeeCode = response.empID
      //   this.password = response.password}
    //)
    //this.router.navigate(['home'], this.employeeCode)
    if(this.authenticate.authenticate(this.employeeCode, this.password)) {
      this.router.navigate(['home'])
      this.invalidLogin= false
    }
    else{
      //window.location.reload();
      this.invalidLogin=true
    }
  }

  // handleSuccessfulResponse(response){
  //   this.employeeCode = response.empID
  //   this.password = response.password

  //   console.log(this.employeeCode, this.password);
  // }
    
//   public signinWithGoogle () {
//     let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
 
//     this.socialAuthService.signIn(socialPlatformProvider)
//     .then((userData) => {
//        //on success
//        //this will return user data from google. What you need is a user token which you will send it to the server
//        this.sendToRestApiMethod(userData.idToken);
//     });
//  }
//   sendToRestApiMethod(idToken: string) {
//    console.log("Mummy");
//   }

public signinWithGoogle () {
  let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

  this.socialAuthService.signIn(socialPlatformProvider)
  .then((userData) => {
     //on success
     //this will return user data from google. What you need is a user token which you will send it to the server
    //  this.sendToRestApiMethod(userData.idToken);
    console.log(userData);
  });
}


  ngOnInit(): void {
    
  }

}
