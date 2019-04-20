import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-attendance-predictor',
  templateUrl: './attendance-predictor.component.html',
  styleUrls: ['./attendance-predictor.component.scss']
})
export class AttendancePredictorComponent implements OnInit {

  @ViewChild('frame') frame: ModalDirective;

  attendanceForm: FormGroup;

  resultsText = 'Meow';

  isFeasible = false;

  toAttend: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.attendanceForm = this.fb.group({
      attended: ['', [Validators.required]],
      currentTotalClasses: ['', [Validators.required]],
      targetPercentage: ['', [Validators.required]],
      totalClasses: ['', [Validators.required]]
    });
  }

  predictAttendance() {
    console.log(this.attendanceForm.value);
    const values = this.attendanceForm.value;

    this.isFeasible = false;

    const absentClasses = values.currentTotalClasses - values.attended;
    const maxPercentage = ( ( values.totalClasses - absentClasses ) / values.totalClasses ) * 100;

    console.log(maxPercentage);

    this.toAttend = 0;

    if (maxPercentage >= values.targetPercentage) {
      this.toAttend = (values.targetPercentage / 100) * values.totalClasses;
      this.toAttend -= values.attended;
      this.isFeasible = true;
      console.log(this.toAttend);
    }


    this.frame.show();
  }

}
