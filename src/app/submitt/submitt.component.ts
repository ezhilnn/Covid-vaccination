import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-submitt',
  templateUrl: './submitt.component.html',
  styleUrl: './submitt.component.css'
})
export class SubmittComponent {
  mobile_number!: string;
  vaccination_date: Date | null = null;

  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) { }

  onSubmit() {
    // Prepare the data object
    const formData = {
      mobile_number: this.mobile_number,
      vaccination_date: this.vaccination_date ? this.formatDate(this.vaccination_date) : null
    };
    console.log(this.vaccination_date);

    // Send POST request to the backend
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
  onDateChange(event: any) {
    // Extract the selected date value from the event
    const selectedDate: string = event.target.value;
    console.log('Selected Date:', selectedDate); // Log the selected date
    
    // Assign the parsed Date object to the vaccination_date property
    this.vaccination_date = selectedDate ? new Date(selectedDate) : null;

    // Trigger change detection explicitly
    this.cdr.detectChanges();
}



    
  resetForm() {
    this.mobile_number = '';
    this.vaccination_date = null;
  }

  private formatDate(date: Date | null): string {
    if (date instanceof Date && !isNaN(date.getTime())) {
      // Format date as YYYY-MM-DD
      return date.toISOString().slice(0, 10);
    } else {
      return ''; // Return empty string if date is null or invalid
    }
  }
}