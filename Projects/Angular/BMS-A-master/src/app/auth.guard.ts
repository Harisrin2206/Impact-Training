import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router){

  }
  canActivate(){
    if(sessionStorage.getItem("usersuccess")){
      return true;
    }else{
      window.alert('permisssion denied with-out Login');
      this.route.navigate(['login'])
      return false;
    }
  }

}
