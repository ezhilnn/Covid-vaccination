import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CentersService } from '../centers.service';

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent {
  constructor(private centerservice: CentersService) {}
  noOfCenters = this.centerservice.noOfCenters;
  @ViewChild('adminForm', { static: true }) form!: NgForm;

  adminSubmit(adminForm: NgForm) {
    // Handle form submission logic here
  }
  idErr(value: any) {
    const numericRegex = /^[0-9]+$/;
    const isValid = numericRegex.test(value);
  
    if (!isValid || parseInt(value, 10) <= 0 || parseInt(value, 10) > this.noOfCenters) {
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
