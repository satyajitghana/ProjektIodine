import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksPredictorComponent } from './marks-predictor.component';

describe('MarksPredictorComponent', () => {
  let component: MarksPredictorComponent;
  let fixture: ComponentFixture<MarksPredictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksPredictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
