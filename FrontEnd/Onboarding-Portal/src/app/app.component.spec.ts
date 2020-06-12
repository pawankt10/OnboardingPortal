import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService, AUTHENTICATED_USER } from './service/authentication.service';
import { Component } from '@angular/core';

describe('AppComponent', () => {

  let authenticate: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [
        AuthenticationService
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    authenticate = TestBed.get(AuthenticationService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Onboarding-Portal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Onboarding-Portal');
  });

  it(`should logout from 'Onboarding-Portal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(authenticate, 'logout');
    sessionStorage.clear();
    app.logout();
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBeNull();
  });

  it('should set key value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    sessionStorage.clear();
    sessionStorage.setItem(AUTHENTICATED_USER, "INT406");
    app.ngOnInit();
    expect(app.key).toEqual(sessionStorage.getItem(AUTHENTICATED_USER));
  });

});
