import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardeeComponent } from './onboardee.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchOnboardeeService } from 'src/app/service/fetch-onboardee.service';
import { of, throwError } from 'rxjs';

describe('OnboardeeComponent', () => {
  let component: OnboardeeComponent;
  let fixture: ComponentFixture<OnboardeeComponent>;
  let fetch: FetchOnboardeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        FetchOnboardeeService,
      ],
      declarations: [OnboardeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fetch = TestBed.get(FetchOnboardeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set demandList upon successful fetching of list', () => {
    spyOn(fetch, 'fetchDemandList').and.returnValue(of({}));

    component.fetchDemandList();
    expect(component.demandList).toEqual({});
  });

  it('should show error message if any occurred', () => {
    spyOn(fetch, 'fetchDemandList').and.returnValue(throwError('error message'));
    spyOn(window.console, 'log');

    component.fetchDemandList();
    expect(window.console.log).toHaveBeenCalled();
  });
});
