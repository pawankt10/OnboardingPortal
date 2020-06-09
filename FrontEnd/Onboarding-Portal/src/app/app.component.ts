import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
import { AUTHENTICATED_USER } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Onboarding-Portal';

  key: String

  constructor(
    public authenticate: AuthenticationService,
    private router: Router,
  ) { }

  logout() {
    this.authenticate.logout()
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
    this.key = sessionStorage.getItem(AUTHENTICATED_USER);
    console.log(this.key);
  }

}
