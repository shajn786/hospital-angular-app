import { Component } from '@angular/core';

@Component({
  selector: 'app-patiententry',
  templateUrl: './patiententry.component.html',
  styleUrls: ['./patiententry.component.css']
})
export class PatiententryComponent {

  patientname=""
  patientid=""
  address=""
  contactnumber=""
  dateofappointment=""
  image=""
  doctorname=""

  entry = ()=>
  {
    let data:any={"patientname":this.patientname,"patientid":this.patientid,"address":this.address,"contactnumber":this.contactnumber,
  "dateofappointment":this.dateofappointment,"image":this.image,"doctorname":this.doctorname}

  console.log(data)
  }

}
