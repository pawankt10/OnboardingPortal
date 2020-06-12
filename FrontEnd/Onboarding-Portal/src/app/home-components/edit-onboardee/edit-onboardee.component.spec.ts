import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOnboardeeComponent } from './edit-onboardee.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchOnboardeeService } from 'src/app/service/fetch-onboardee.service';
import { empty, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('EditOnboardeeComponent', () => {
  let component: EditOnboardeeComponent;
  let fixture: ComponentFixture<EditOnboardeeComponent>;
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
      declarations: [EditOnboardeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOnboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fetch = TestBed.get(FetchOnboardeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set onboardee upon getting valid data', () => {
    spyOn(fetch, 'fetchOnboardee').and.returnValue(of({}));

    component.fetchOnboardeeDetails();
    expect(component.onboardee).toEqual({});
  });

  it('should show error message if any occurred', () => {
    spyOn(fetch, 'fetchOnboardee').and.returnValue(throwError('error message'));
    spyOn(window.console, 'log');

    component.fetchOnboardeeDetails();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should show error message if any occurred ', () => {
    const data = {
      name: 'xyz',
    }
    spyOn(fetch, 'saveOnboardee').and.returnValue(throwError('error message'));
    spyOn(window.console, 'log');

    component.saveOnboardee(data);
    expect(window.console.log).toHaveBeenCalled();
  });

});
