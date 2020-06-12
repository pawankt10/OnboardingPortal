import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnboardeeComponent } from './view-onboardee.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FetchOnboardeeService } from 'src/app/service/fetch-onboardee.service';
import { of, throwError } from 'rxjs';

describe('ViewOnboardeeComponent', () => {
  let component: ViewOnboardeeComponent;
  let fixture: ComponentFixture<ViewOnboardeeComponent>;
  let fetch: FetchOnboardeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        FetchOnboardeeService,
      ],
      declarations: [ViewOnboardeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fetch = TestBed.get(FetchOnboardeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set onboardee upon getting valid data', () => {
    spyOn(fetch, 'fetchOnboardee').and.returnValue(of({}));

    component.fetchDetails();
    expect(component.onboardee).toEqual({});
  });

});
