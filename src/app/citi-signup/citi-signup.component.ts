import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CentersService } from '../centers.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-citi-signup',
  templateUrl: './citi-signup.component.html',
  styleUrl: './citi-signup.component.css'
})
export class CitiSignupComponent {
  constructor(private centerservice: CentersService,private authService:AuthService, private http:HttpClient) {}
  noOfCenters = this.centerservice.noOfCenters;
  @ViewChild('adminForm', { static: true }) form!: NgForm;

  adminSubmit(adminForm: NgForm) {
    // Handle form submission logic here
    // console.log(this.form.controls['password'].value,this.form.controls['rpassword'].value);
    const formData = {
      aadhar_number: this.form.value.aadar,
      name: this.form.value.name,
      age: this.form.value.age,
      mobile: this.form.value.id,
      password: this.form.value.password
    };
    console.log(formData);
    this.http.post<any>('http://localhost:3000/sign-up',formData).subscribe(
      response => {
        console.log('Data submitted successfully:', response);
      },
      error => {
        console.error('Error submitting data:', error);
      }
    );

    this.authService.registerUser({
      mobile:adminForm.value.id,
      password:adminForm.value.password
    });

    this.authService.mobile(this.form.value.mobile);

  }
  idErr(value: any) {
    const numericRegex = /^[0-9]+$/;
    const isValid = numericRegex.test(value);
    const leng=value.length;
  
    if (!isValid ||   leng !== 10) {
      this.form.controls['id'].setErrors({ invalidId: true });
      if (!isValid) {
        this.form.controls['id'].setErrors({ pattern: true });
      }
      if (parseInt(value, 10) <= 0) {
        this.form.controls['id'].setErrors({ required: true });
      }
      if (parseInt(value, 10) > this.noOfCenters) {
        this.form.controls['id'].setErrors({ pattern: true });
      }
    } else {
      this.form.controls['id'].setErrors(null);
    }
  }
  rp(event:any){
    if(this.form.controls['password'].value!==this.form.controls['rpassword'].value){
      this.form.controls['rpassword'].setErrors({eq:true})
    }
  }
}
