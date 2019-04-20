import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarksPredictorComponent } from './marks-predictor/marks-predictor.component';
import { AttendancePredictorComponent } from './attendance-predictor/attendance-predictor.component';

const routes: Routes = [
  { path: '', redirectTo: '/marks-predictor', pathMatch: 'full' },
  { path: 'marks-predictor', component: MarksPredictorComponent },
  { path: 'attendance-predictor', component: AttendancePredictorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
