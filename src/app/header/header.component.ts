import { Component ,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isAuth:boolean=false;
  authSubcription!:Subscription;
  constructor(private router:Router,private authService:AuthService){
  }
  ngOnInit(): void {
    this.authSubcription=this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    })
  }
  logout(){
    this.authService.logOutUser();
    console.log("logged out status")
    console.log(this.isAuth);
  }
  
  
}
