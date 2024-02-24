import { Component,OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent implements OnInit{
  constructor(private authService:AuthService){}
  userData:UserDetails|null=null;
  ngOnInit(){
    this.userData=this.authService.userData;
  }
}
