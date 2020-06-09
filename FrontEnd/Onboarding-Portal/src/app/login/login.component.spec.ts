import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { getAuthServiceConfigs } from '../socialloginconfigs';
import { AuthenticationService } from '../service/authentication.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        SocialLoginModule,
      ],
      providers: [
        AuthenticationService,
        AuthService,
        {
          provide: AuthServiceConfig,
          useFactory: getAuthServiceConfigs
        }
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthenticationService);
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

});
