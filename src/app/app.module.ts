import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CoreModule } from './core/core.module';
import { MarksPredictorComponent } from './marks-predictor/marks-predictor.component';
import { AttendancePredictorComponent } from './attendance-predictor/attendance-predictor.component';

import { ReactiveFormsModule } from '@angular/forms';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    MarksPredictorComponent,
    AttendancePredictorComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
