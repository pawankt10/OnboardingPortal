import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDemandsComponent } from './show-demands.component';
import { HttpClientModule } from '@angular/common/http';

describe('ShowDemandsComponent', () => {
  let component: ShowDemandsComponent;
  let fixture: ComponentFixture<ShowDemandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [ShowDemandsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
