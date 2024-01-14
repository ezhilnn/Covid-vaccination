import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isAuth:boolean=false;
  authSubscription!:Subscription;
  constructor(private router:Router,private authService:AuthService){}
  ngOnInit(): void {
    this.authSubscription=this.authService.authChange.subscribe(authstatus=>{
      this.isAuth=authstatus;
      console.log(authstatus);
    });
    console.log("authstatus")
    console.log(this.isAuth);
  }
}
