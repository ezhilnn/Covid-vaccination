import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {
  @ViewChild('f',{static:true}) form!:NgForm;
  totalCenters=10;
onSubmit(f:NgForm){
  alert('Your RCertificate will be sent to your mail id ahortly');
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

emailErr(value: string) {
  const maxLength = 100;
  if (!value) {
    this.form.controls['email'].setErrors({ required: true });
  } else if (value.length > maxLength) {
    this.form.controls['email'].setErrors({ len: true });
  } else if (!this.isValidEmail(value)) {
    this.form.controls['email'].setErrors({ email: true });
  } else {
    this.form.controls['email'].setErrors(null);
  }
}

isValidEmail(email: string): boolean {
  // Simple email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

}
