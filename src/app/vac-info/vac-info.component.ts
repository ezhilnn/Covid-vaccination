import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vac-info',
  templateUrl: './vac-info.component.html',
  styleUrl: './vac-info.component.css'
})
export class VacInfoComponent {
constructor(private router:Router){}
more(){
  this.router.navigate(['/more'])
}
}
