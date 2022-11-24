import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    PatientSearchComponent,
    PatientDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
