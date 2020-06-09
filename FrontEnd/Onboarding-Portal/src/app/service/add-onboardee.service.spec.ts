import { TestBed } from '@angular/core/testing';

import { AddOnboardeeService } from './add-onboardee.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddOnboardeeService', () => {
  let service: AddOnboardeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(AddOnboardeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
