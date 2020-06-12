import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FetchOnboardeeService } from 'src/app/service/fetch-onboardee.service';
import { of, throwError } from 'rxjs';
import { DeleteOnboardeeService } from 'src/app/service/home/delete-onboardee.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fetchList: FetchOnboardeeService;
  let deleteRecord: DeleteOnboardeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [
        FetchOnboardeeService,
        DeleteOnboardeeService,
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fetchList = TestBed.get(FetchOnboardeeService);
    deleteRecord = TestBed.get(DeleteOnboardeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is initial state ok', () => {
    expect(component.onboardeeList).toBeUndefined();
    expect(component.searchString).toBeUndefined();
  });

  it('should call init() on add onboardee button', () => {
    spyOn(component, 'ngOnInit');

    component.handleAdd();
    expect(component.ngOnInit).toHaveBeenCalled();
  })

  it('should set onboardeeList upon getting valid data', () => {
    spyOn(fetchList, 'searchDemandList').and.returnValue(of({}));

    component.search();
    expect(component.onboardeeList).toEqual([{}]);
  });

  it('should invoke ngOnIt() upon successful deletion', () => {
    spyOn(deleteRecord, 'deleteOnboardee').and.returnValue(of(null));
    spyOn(component, 'ngOnInit');

    component.deleteOnboardee();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should not invoke ngOnIt() upon unsuccessful deletion', () => {
    spyOn(deleteRecord, 'deleteOnboardee').and.returnValue(throwError('error message'));
    spyOn(window.console, 'log');

    component.deleteOnboardee();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should set loginDetail upon getting valid data', () => {
    spyOn(fetchList, 'fetchLoginDetails').and.returnValue(of({}));

    component.fetchLoginDetails("INT406");
    expect(component.loginDetail).toEqual({});
  });

  it('should show error message if any occurred during counting', () => {
    spyOn(fetchList, 'fetchLoginDetails').and.returnValue(throwError('error message'));
    spyOn(window.console, 'log');

    component.fetchLoginDetails("INT406");
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should set onboardeeList upon getting valid data', () => {
    spyOn(fetchList, 'fetchOnboardeeList').and.returnValue(of({}));

    component.fetchOnboardeeDetailsList();
    expect(component.onboardeeList).toEqual({});
  });

  it('should show error message if any occurred during counting', () => {
    spyOn(fetchList, 'fetchOnboardeeList').and.returnValue(throwError('error message'));
    spyOn(window.console, 'log');

    component.fetchOnboardeeDetailsList();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should set location count correctly', () => {
    spyOn(fetchList, 'fetchCount').and.returnValue(of(5));

    component.fetchCountAtLocation('Mumbai');
    expect(component.mumbai).toEqual(5);
  });

  it('should show error message if any occurred during counting', () => {
    spyOn(fetchList, 'fetchCount').and.returnValue(throwError('error message'));
    spyOn(window.console, 'log');

    component.fetchCountAtLocation('Mumbai');
    expect(window.console.log).toHaveBeenCalled();
  });

});
