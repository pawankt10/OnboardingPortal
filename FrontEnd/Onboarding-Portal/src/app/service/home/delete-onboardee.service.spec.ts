import { TestBed } from '@angular/core/testing';

import { DeleteOnboardeeService } from './delete-onboardee.service';
import { HttpClientModule } from '@angular/common/http';

describe('DeleteOnboardeeService', () => {
  let service: DeleteOnboardeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(DeleteOnboardeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
