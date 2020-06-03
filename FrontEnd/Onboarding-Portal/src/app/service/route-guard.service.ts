import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.auth.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
}
