import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDemandsComponent } from './show-demands.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchOnboardeeService } from '../service/fetch-onboardee.service';
import { of, throwError } from 'rxjs';
import { exception } from 'console';

describe('ShowDemandsComponent', () => {
  let component: ShowDemandsComponent;
  let fixture: ComponentFixture<ShowDemandsComponent>;
  let fetchDemand: FetchOnboardeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        FetchOnboardeeService,
      ],
      declarations: [ShowDemandsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fetchDemand = TestBed.get(FetchOnboardeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch list of demands', () => {
    spyOn(fetchDemand, 'fetchDemandList').and.returnValue(of({}));

    component.fetchList();
    expect(component.demandList).toEqual({});
  });

  it('should show error message when error occurred', () => {
    spyOn(fetchDemand, 'fetchDemandList').and.returnValue(throwError('error message'));

    spyOn(window.console, 'log');

    component.fetchList();
    expect(window.console.log).toHaveBeenCalled();
  });
});
