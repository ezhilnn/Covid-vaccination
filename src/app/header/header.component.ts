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

  isAuthAdmin:boolean=false;
  isAuth:boolean=false;
  authSubcription!:Subscription;
  authSubcription2!:Subscription;
  constructor(private router:Router,private authService:AuthService){
  }
  ngOnInit(): void {
    this.authSubcription=this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    });
    this.authSubcription2=this.authService.authAdminChange.subscribe(authStatus=>{
      this.isAuthAdmin=authStatus;
    });
  }
  logout(){
    this.authService.logOutUser();
    console.log("logged out status")
    console.log(this.isAuth);
  }
  admin(){
    this.router.navigate(['/admin']);
  }
  logoutAdmin() {
    this.authService.logOutAdmin;
    console.log(this.isAuthAdmin);
    this.isAuthAdmin=false;
    this.router.navigate(['/']);
    }
  
  
}
