import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { UserDetails } from './user-details';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Adjust the URL based on your Express server configuration

  userData:UserDetails|null=null;
  private userMobile=0;
  private user:User|null=null;
  authChange=new Subject<boolean>();
  authAdminChange=new Subject<boolean>();
  constructor(private router:Router,private http: HttpClient) { }
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
  AdminUser(authData:AuthData){
    this.user={
      mobile:authData.mobile,
      password:authData.password
    };
    this.authSuccessfully1();
  }
  authSuccessfully1() {
    this.authAdminChange.next(true);
    this.router.navigate(['/']);
  }
  logOutAdmin(){
    
    this.authAdminChange.next(false);
    this.router.navigate(['/']);
  }
  private authSuccessfully() {
    this.authChange.next(true);
    console.log("Successfully Authentiacted");
    console.log(this.authChange);
    console.log(this.isAuth());
    this.router.navigate(['/']);
  }
  mobile(data:any){
    this.userMobile=data.toString();
    this.fetchdetails(this.userMobile.toString());
  }
  fetchDetails(mobile: string) {
    return this.http.get<any>(`${this.apiUrl}/user/${mobile}`);
  }
  fetchdetails(mobile: string) {
    this.fetchDetails(mobile).subscribe(
      userDetails => {
        this.userData = userDetails;
      },
      error => {
        console.error('Error fetching user details:', error);
        // Handle error, show error message, etc.
      }
    );
  }
}
