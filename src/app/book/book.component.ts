import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Center } from '../center';
import { CentersService } from '../centers.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
@ViewChild('f') form!:NgForm;
  id=-1;
  // public today: Date = new Date();
  // public minDate: Date;
  center:Center|undefined;
  constructor(private route:ActivatedRoute,private centerService:CentersService){
    this.id=Number(this.route.snapshot.params['id']);
    this.center=this.centerService.getCenterbyId(this.id);
    // this.minDate = new Date();
    // this.minDate.setFullYear(this.minDate.getFullYear() - 18);
  }
  onSubmit(f:NgForm){
    alert("Your slot booked Successfully")
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
      if (parseInt(value, 10) >1) {
        this.form.controls['id'].setErrors({ pattern: true });
      }
    } else {
      this.form.controls['id'].setErrors(null);
    }
  }

  nameErr(value: any) {
    const nameRegex = /^[a-zA-Z ]*$/;
    const isValid = nameRegex.test(value);

    if (!isValid) {
        this.form.controls['name'].setErrors({ pattern: true });
    } else {
        this.form.controls['name'].setErrors(null);
    }
}
calculateMinDate(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}

calculateMaxDate(): string {
  const currentDate = new Date();
  const maxDate = new Date(currentDate.setDate(currentDate.getDate() + 3));

  const year = maxDate.getFullYear();
  const month = ('0' + (maxDate.getMonth() + 1)).slice(-2);
  const day = ('0' + maxDate.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}



}
