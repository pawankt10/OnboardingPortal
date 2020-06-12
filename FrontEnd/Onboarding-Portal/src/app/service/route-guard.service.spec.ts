import { TestBed } from '@angular/core/testing';

import { RouteGuardService } from './route-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

describe('RouteGuardService', () => {
  let service: RouteGuardService;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  let auth: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        RouteGuardService,
        AuthenticationService,
      ],
    });
    service = TestBed.inject(RouteGuardService);
    auth = TestBed.get(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if user is logged in', () => {
    spyOn(auth, 'isUserLoggedIn').and.returnValue(true);
    expect(service.canActivate(route, state)).toBeTruthy();
  });

  it('should return false if user is not logged in', () => {
    spyOn(auth, 'isUserLoggedIn').and.returnValue(false);
    expect(service.canActivate(route, state)).toBeFalsy();
  });

});
