import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Center } from '../center';
import { CentersService } from '../centers.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
@ViewChild('f') form!:NgForm;
  id=-1;
  mobile!: string;
  DOB: Date | null = null;
  
  // public today: Date = new Date();
  // public minDate: Date;
  center:Center|undefined;
  constructor(private route:ActivatedRoute,private centerService:CentersService,private http: HttpClient){
    this.id=Number(this.route.snapshot.params['id']);
    this.center=this.centerService.getCenterbyId(this.id);
    // this.minDate = new Date();
    // this.minDate.setFullYear(this.minDate.getFullYear() - 18);
  }
  onSubmit(f:NgForm){
    alert("Your slot booked Successfully");
    const formData = {
      mobile_number: f.value.mobile,
      vaccination_date: f.value.DOB,
      vaccination_center:this.id
    };
    console.log(f.value.DOB);
    console.log(formData);
  
    this.http.post<any>('http://localhost:3000/submit-vaccination', formData)
      .subscribe(
        response => {
          console.log('Data submitted successfully:', response);
          this.resetForm();
        },
        error => {
          console.error('Error submitting data:', error);
        }
      );

  }
  idErr(value: any) {
    const numericRegex = /^[0-9]+$/;
    const isValid = numericRegex.test(value);
    const leng=value.length;
  
    if (!isValid ||   leng !== 10) {
      this.form.controls['mobile'].setErrors({ invalidId: true });
      if (!isValid) {
        this.form.controls['mobile'].setErrors({ pattern: true });
      }
      if (parseInt(value, 10) <= 0) {
        this.form.controls['mobile'].setErrors({ required: true });
      }
      if (parseInt(value, 10) >1) {
        this.form.controls['mobile'].setErrors({ pattern: true });
      }
    } else {
      this.form.controls['mobile'].setErrors(null);
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

private formatDate(date: Date | null): string {
  if (date instanceof Date && !isNaN(date.getTime())) {
    // Format date as YYYY-MM-DD
    return date.toISOString().slice(0, 10);
  } else {
    return ''; // Return empty string if date is null or invalid
  }
}
resetForm() {
  this.mobile = '';
  this.DOB = null;
}

}
