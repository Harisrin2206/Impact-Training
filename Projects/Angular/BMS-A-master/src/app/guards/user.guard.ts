import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {
  constructor(private authService: AuthService){

  }
  canActivateChild() {
    if(this.authService.isUserRole){
      return true;
    }else{
      return false;
    }

  }

}
