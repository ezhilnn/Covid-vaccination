import { Component, ViewChild } from '@angular/core';
import { CentersService } from '../centers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-citizen-login',
  templateUrl: './citizen-login.component.html',
  styleUrl: './citizen-login.component.css'
})
export class CitizenLoginComponent {
  constructor(private centerservice: CentersService) {}
  noOfCenters = this.centerservice.noOfCenters;
  @ViewChild('adminForm', { static: true }) form!: NgForm;

  adminSubmit(adminForm: NgForm) {
    // Handle form submission logic here
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
