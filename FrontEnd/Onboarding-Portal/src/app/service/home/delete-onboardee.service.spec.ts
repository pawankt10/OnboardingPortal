import { TestBed } from '@angular/core/testing';

import { DeleteOnboardeeService } from './delete-onboardee.service';

describe('DeleteOnboardeeService', () => {
  let service: DeleteOnboardeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteOnboardeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
