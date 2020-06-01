import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Onboarding-Portal';

  constructor(
    public authenticate: AuthenticationService,
    private router: Router
  ) { }

  logout() {
    this.authenticate.logout()
    this.router.navigate(['login'])
  }

}
