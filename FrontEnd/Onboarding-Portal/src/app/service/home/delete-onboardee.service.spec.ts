import { TestBed } from '@angular/core/testing';

import { DeleteOnboardeeService } from './delete-onboardee.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeleteOnboardeeService', () => {
  let service: DeleteOnboardeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        DeleteOnboardeeService
      ],
    });
    service = TestBed.inject(DeleteOnboardeeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should delete a record successfully', () => {
    const onboardee = {
      id: 5,
      name: 'xyz'
    }
    service.deleteOnboardee(onboardee.id).subscribe();

    const req = httpMock.expectOne(`http://localhost:8080/delete/${onboardee.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(onboardee);

  });

});
