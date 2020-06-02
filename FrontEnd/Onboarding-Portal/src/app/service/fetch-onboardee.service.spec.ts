import { TestBed } from '@angular/core/testing';

import { FetchOnboardeeService } from './fetch-onboardee.service';

describe('FetchOnboardeeService', () => {
  let service: FetchOnboardeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchOnboardeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
