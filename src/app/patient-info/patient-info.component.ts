import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient-info.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  title = 'List of Patients';
  patients: any = 'hello'


  constructor (private service: PatientService){
      
  };
  ngOnInit(): void{
    this.patients = this.service.getpatientBrief();
      console.log(this.patients)
  }
}