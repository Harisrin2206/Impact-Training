import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  forEach(arg0: (element: any) => void) {
    throw new Error('Method not implemented.');
  }
  userlogin=false;
  isUserLogIn=Boolean(sessionStorage.getItem("usersuccess"));
  constructor() {}
    get isUserLoggedIn(){

      return false;
    }
    get isUserRole(){
      return false;
    }

     isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    this.isUserLogIn= Boolean(sessionStorage.getItem("usersuccess"));
  }

  logout() {
    this.isLoggedIn = false;
    this.isUserLogIn= Boolean(sessionStorage.getItem("usersuccess"));
  }
}

