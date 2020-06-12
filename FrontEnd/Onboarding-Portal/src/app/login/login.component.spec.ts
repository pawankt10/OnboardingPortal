import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { getAuthServiceConfigs } from '../socialloginconfigs';
import { AuthenticationService } from '../service/authentication.service';
import { of, throwError } from 'rxjs';
import { HomeComponent } from '../home-components/home/home.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthenticationService;
  let socialAuthService: AuthService


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([{
          path: 'home/:id',
          component: HomeComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
        }]),
        SocialLoginModule,
      ],
      providers: [
        AuthenticationService,
        AuthService,
        {
          provide: AuthServiceConfig,
          useFactory: getAuthServiceConfigs
        },
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthenticationService);
    socialAuthService = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set invalidLogin to false on valid credentials', () => {
    spyOn(service, 'authenticate').and.returnValue(of({}));

    component.handleLogin();
    expect(service.authenticate).toHaveBeenCalled();
    expect(component.invalidLogin).toBeFalsy();
  });

  it('should set invalidLogin to true on invalid credentials', () => {

    spyOn(service, 'authenticate').and.returnValue(of(null));

    component.handleLogin();
    expect(service.authenticate).toHaveBeenCalled();
    expect(component.invalidLogin).toBeTruthy();
  });

  it('should show error message if any occurred during authentication', () => {
    spyOn(service, 'authenticate').and.returnValue(throwError('error message'));
    spyOn(window.console, 'log');

    component.handleLogin();
    expect(window.console.log).toHaveBeenCalled();
  });


  it('should set invalidLogin to false on valid email Id', () => {
    const googleId = {
      id: '12345',
      email: 'abc@accoliteindia.com',
      provider: "abc",
      photoUrl: "abc",
      name: "abc",
      lastName: "abc",
      idToken: "abc",
      firstName: "abc",
      authToken: "abc",
      authorizationCode: "",
    }

    const userData = {
      department: "Human Resource Department",
      emailID: "pawan.kumar@accoliteindia.com",
      empID: "ERM406",
      googleID: "106305518709217740864",
      name: "Pawan Kumar",
      password: "xyz123",
    }

    spyOn(socialAuthService, 'signIn').and.returnValue(Promise.resolve(googleId));
    spyOn(service, 'getEmployeeId').and.returnValue(of(userData));

    component.signinWithGoogle();
    expect(socialAuthService.signIn).toHaveBeenCalled();

  });

  it('should set invalidLogin to true on invalid email Id', () => {
    const googleId = {
      id: '12345',
      email: 'abc@gmail.com',
      provider: "abc",
      photoUrl: "abc",
      name: "abc",
      lastName: "abc",
      idToken: "abc",
      firstName: "abc",
      authToken: "abc",
      authorizationCode: ""
    }
    spyOn(socialAuthService, 'signIn').and.returnValue(Promise.resolve(googleId));

    component.signinWithGoogle();
    expect(component.invalidLogin).toBeFalsy();
  });

  it('should set invalidLogin to false upon closing for popup', () => {
    component.close();
    expect(component.invalidLogin).toBeFalsy();
  });

});
