import { TestBed } from '@angular/core/testing';

import { FetchOnboardeeService } from './fetch-onboardee.service';
import { HttpClientModule } from '@angular/common/http';

describe('FetchOnboardeeService', () => {
  let service: FetchOnboardeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(FetchOnboardeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
