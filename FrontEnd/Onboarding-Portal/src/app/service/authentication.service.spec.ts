import { TestBed } from '@angular/core/testing';

import { AuthenticationService, AUTHENTICATED_USER } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        AuthenticationService,
      ]
    });
    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate user successfully', () => {
    const loginDetails = {
      empID: 'INT406',
      password: 'xyz123',
      name: 'Abc',
      emailID: 'abc@gmail.com',
      department: "HR",
      googleID: "12345"
    }

    service.authenticate(loginDetails.empID, loginDetails.password).subscribe(
      data => expect(data).toEqual(loginDetails)
    );

    const req = httpMock.expectOne(`http://localhost:8080/details`);
    expect(req.request.method).toBe('POST');
    req.flush(loginDetails);
  });

  it('should successfully fetch logged in user details', () => {
    const logger = {
      googleID: '5',
      name: 'xyz',
      location: 'Delhi',
    }

    service.getEmployeeId(logger.googleID).subscribe(
      data => expect(data).toEqual(logger)
    );
    const req = httpMock.expectOne(`http://localhost:8080/home2/${logger.googleID}`);
    expect(req.request.method).toBe('GET');
    req.flush(logger);

  });

  it('should return false if user is not logged in', () => {
    sessionStorage.clear();
    let result = service.isUserLoggedIn();
    expect(result).toBeFalsy();
  });

  it('should return true if user is logged in', () => {
    sessionStorage.setItem(AUTHENTICATED_USER, 'INT406');
    let result = service.isUserLoggedIn();
    expect(result).toBeTruthy();
  });

  it('should remove session item', () => {
    sessionStorage.clear();
    service.logout();
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBeNull();
  });

});
