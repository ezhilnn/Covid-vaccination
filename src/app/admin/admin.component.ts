import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private http:HttpClient){}
  onSubmit(f:NgForm){
    const formData = {
      name: f.value.name,
      location: f.value.location,
      total_slots: f.value.totalSlots,
      available_slots: f.value.availableSlots
    };

    this.http.post<any>('http://localhost:3000/add-center', formData)
      .subscribe(
        response => {
          console.log('Center added successfully:', response);
          // Optionally, handle success response here
        },
        error => {
          console.error('Error adding center:', error);
          // Optionally, handle error response here
        }
      );
  }
}
