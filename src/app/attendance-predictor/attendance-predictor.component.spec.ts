import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancePredictorComponent } from './attendance-predictor.component';

describe('AttendancePredictorComponent', () => {
  let component: AttendancePredictorComponent;
  let fixture: ComponentFixture<AttendancePredictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancePredictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancePredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
