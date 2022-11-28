import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {

  patientid=""

  search = ()=>
  {
    let data:any ={"patientid":this.patientid}

    console.log(data)
  }

}
