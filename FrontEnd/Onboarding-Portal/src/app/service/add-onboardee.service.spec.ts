import { TestBed } from '@angular/core/testing';

import { AddOnboardeeService } from './add-onboardee.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddOnboardeeService', () => {
  let service: AddOnboardeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        AddOnboardeeService
      ],
    });
    service = TestBed.inject(AddOnboardeeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add onboardee details successfully', () => {
    const onboardee = {
      name: 'xyz',
      location: 'Delhi',
    }
    service.addNewOnboardee(onboardee).subscribe(
      data => expect(data).toEqual(onboardee)
    );

    const req = httpMock.expectOne('http://localhost:8080//OnboardeeDetails');
    expect(req.request.method).toBe('PUT');
    req.flush(onboardee);
  });
});
