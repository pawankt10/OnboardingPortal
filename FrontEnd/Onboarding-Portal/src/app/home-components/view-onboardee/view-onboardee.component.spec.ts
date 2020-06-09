import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnboardeeComponent } from './view-onboardee.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewOnboardeeComponent', () => {
  let component: ViewOnboardeeComponent;
  let fixture: ComponentFixture<ViewOnboardeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      declarations: [ ViewOnboardeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
