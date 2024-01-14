import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router:Router,private authService:AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
        if(this.authService.isAuth()){
            return true;
        }else{
            this.router.navigate(['/citizen-login'])
        }
    }
    
}