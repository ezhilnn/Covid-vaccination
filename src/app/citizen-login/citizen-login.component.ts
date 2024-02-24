import { Component, ViewChild } from '@angular/core';
import { CentersService } from '../centers.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-citizen-login',
  templateUrl: './citizen-login.component.html',
  styleUrl: './citizen-login.component.css'
})
export class CitizenLoginComponent {
  constructor(private centerservice: CentersService,private auth:AuthService,private http:HttpClient) {}
  noOfCenters = this.centerservice.noOfCenters;
  @ViewChild('adminForm', { static: true }) form!: NgForm;
  isActive=false;
  adminSubmit(adminForm: NgForm) {
    console.log(adminForm.value.id);
    console.log(adminForm.value.password);
    // Handle form submission logic here
    const formData={
      mobile:adminForm.value.id,
      password:adminForm.value.password
    }
    this.http.post<any>('http://localhost:3000/check-password', formData)
    .subscribe(
      (response) => {
        if (response.success) {
          // If password is correct, log in the user
          this.auth.logInUser(formData);
          console.log('Logged in successfully');
        } else {
          this.isActive=true;
          console.log('Mobile number or password incorrect');
        }
      },
      (error) => {
        console.error('Error occurred while checking password:', error);
      }
    );

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
  
}
