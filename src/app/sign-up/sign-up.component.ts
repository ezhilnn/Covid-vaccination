import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CentersService } from '../centers.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private centerservice: CentersService,private authService:AuthService) {}
  noOfCenters = this.centerservice.noOfCenters;
  @ViewChild('adminForm', { static: true }) form!: NgForm;

  adminSubmit(adminForm: NgForm) {
    // Handle form submission logic here
    // console.log(this.form.controls['password'].value,this.form.controls['rpassword'].value);
    this.authService.registerUser({
      mobile:adminForm.value.id,
      password:adminForm.value.password
    })


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
