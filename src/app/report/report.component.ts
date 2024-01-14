import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CentersService } from '../centers.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  constructor(private centerservice:CentersService){}
  @ViewChild('f',{static:true}) form!:NgForm;
  totalCenters=this.centerservice.noOfCenters;
onSubmit(f:NgForm){
  alert('Your Report was submitted');
  this.form.resetForm();
}
maxDate(){
  const today=new Date();
  return today.toISOString().split('T')[0];
}
getMinDate() {
  const minDate = new Date('2019-03-31').toISOString().split('T')[0];
  return minDate;
}
// nameErr(value:any){
//   if(value.length <5 || value.length>20){
//     this.form.controls['name'].setErrors({len:true})
//   }else{
//     this.form.controls['name'].setErrors(null)
//   }
// }
nameErr(value: any) {
  const pattern = /^[a-zA-Z ]*$/; 
  if (!pattern.test(value)) {
    this.form.controls['name'].setErrors({ pattern: true });
  } else if (value.length < 5 || value.length > 20) {
    this.form.controls['name'].setErrors({ len: true });
  } else {
    this.form.controls['name'].setErrors(null);
  }
}
// numErr(value:any){
//   if(value.length !==10){
//     this.form.controls['number'].setErrors({lenm:true})
//   }else{
//     this.form.controls['number'].setErrors(null)
//   }
// }

numErr(value: any) {
  const pattern = /^[0-9]*$/; 
  if (!pattern.test(value)) {
    this.form.controls['number'].setErrors({ pattern: true });
  } else if (value.length !== 10) {
    this.form.controls['number'].setErrors({ lenm: true });
  } else {
    this.form.controls['number'].setErrors(null);
  }
}

// cErr(value: any) {
//   const val = parseInt(value, 10);
//   if (val <= 0 || val > this.totalCenters || isNaN(val)) {
//     this.form.controls['center'].setErrors({ lenc: true });
//   } else {
//     this.form.controls['center'].setErrors(null);
//   }
// }

cErr(value: any) {
  const val = value.trim(); 
  const pattern = /^[0-9]*$/; 
  if (!pattern.test(val)) {
    this.form.controls['center'].setErrors({ pattern: true });
  } else {
    const centerNumber = parseInt(val, 10);
    if (centerNumber <= 0 || centerNumber > this.totalCenters || isNaN(centerNumber)) {
      this.form.controls['center'].setErrors({ lenc: true });
    } else {
      this.form.controls['center'].setErrors(null);
    }
  }
}
prErr(value: string) {
  const pattern = /^[A-Za-z\s]*$/; // Allow characters and spaces
  if (!pattern.test(value)) {
    this.form.controls['problem'].setErrors({ pattern: true });
  } else if (value.length < 40 || value.length > 300) {
    this.form.controls['problem'].setErrors({ lenp: true });
  } else {
    this.form.controls['problem'].setErrors(null);
  }
}

}
