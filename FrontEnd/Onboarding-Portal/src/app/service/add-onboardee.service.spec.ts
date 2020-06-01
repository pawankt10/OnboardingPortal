import { TestBed } from '@angular/core/testing';

import { AddOnboardeeService } from './add-onboardee.service';

describe('AddOnboardeeService', () => {
  let service: AddOnboardeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddOnboardeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
