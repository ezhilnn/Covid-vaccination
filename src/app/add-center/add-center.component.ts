import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent {
  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    const { name, location, totalSlots, availableSlots } = form.value;
    const formData = {
      name: name,
      location: location,
      total_slots: totalSlots,
      available_slots: availableSlots
    };

    this.http.post<any>('http://localhost:3000/add-center', formData)
      .subscribe(
        response => {
          console.log('Center added successfully:', response);
          // Optionally, reset the form after successful submission
          form.reset();
        },
        error => {
          console.error('Error adding center:', error);
        }
      );
  }
}
