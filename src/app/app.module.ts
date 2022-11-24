import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { PatientviewComponent } from './patientview/patientview.component';

const myRoute:Routes= [
  {
 path:"",component:PatiententryComponent
  },
  {
    path:"search",component:PatientSearchComponent
  },
  {
    path:"delete",component:PatientDeleteComponent
  },
  {
    path:"view",component:PatientviewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    PatientSearchComponent,
    PatientDeleteComponent,
    PatientviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(myRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
