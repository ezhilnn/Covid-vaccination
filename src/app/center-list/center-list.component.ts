import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent implements OnInit {
  centers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCenters();
  }

  fetchCenters() {
    this.http.get<any[]>('http://localhost:3000/centers')
      .subscribe(
        data => {
          this.centers = data;
        },
        error => {
          console.error('Error fetching centers:', error);
        }
      );
  }
}
