import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:User|null=null;
  authChange=new Subject<boolean>();

  constructor(private router:Router) { }
  registerUser(authData:AuthData){
    this.user={
      mobile:authData.mobile,
      password:authData.password
    };
    this.authSuccessfully();
  }
  logInUser(authData:AuthData){
    this.user={
      mobile:authData.mobile,
      password:authData.password
    };
    this.authSuccessfully();
  }
  logOutUser(){
    this.user=null;
    this.authChange.next(false);
    this.router.navigate(['/']);
  }
  getUser(){
    return {...this.user}
  }
  isAuth(){
    return this.user!=null;
  }
  private authSuccessfully() {
    this.authChange.next(true);
    console.log("Successfully Authentiacted");
    console.log(this.authChange);
    console.log(this.isAuth());
    this.router.navigate(['/']);
  }
}
