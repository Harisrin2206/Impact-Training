// import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterValidateService } from '../registerValidate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersuccess=false;
  users: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private authService: AuthService,
    private service:RegisterValidateService
  ) {
  //   this.http.get("http://localhost:3000/users").subscribe((data:any)=>{
  //   this.users=data;
  // })
  }
  LoginForm = this.fb.group({
    username: [, Validators.required],
    emailvalue: [, Validators.required],
    mobilevalue: [, Validators.required],
    passwordvalue: [, Validators.required],
    confirmpasswordvalue: [, Validators.required]
  });
  error: boolean = false;

  loginform(email:any) {
    console.log(email);
    sessionStorage.setItem('email', email);
    this.user();
    this.admin();
    if (this.error) {
      alert('error');
      this.error=false;
    }
  }
  submit(){
    alert("submitted")
    this.user();
    // this.admin();
  }

  userId:any;

  user() {
    this.http.get<any>('http://localhost:3000/users').subscribe((value) => {

      const user = value.find(
        (u: any) =>
          u.email === this.LoginForm.value.emailvalue &&
          u.password === this.LoginForm.value.passwordvalue
      );

      if (user) {
        alert('login sucessful');
        this.LoginForm.reset();
        this.usersuccess=true;
        sessionStorage.setItem("usersuccess","true")
        this.authService.userlogin=true;
        this.route.navigate(['home']);
      }
      this.error = false;
    });
  }
  admin(){
    {
      this.http.get<any>('http://localhost:3000/admin').subscribe((users)=>
      {
        const admin= users.find((a:any)=>a.email === this.LoginForm.value.emailvalue && a.pass === this.LoginForm.value.passwordvalue );
        if(admin)
        {
         alert('login successfully');
         this.LoginForm.reset();
         this.route.navigate(['/admindashboard']);
        }
        else
        {
         this.error=true;
        }
      });
     }
    }
  ngOnInit(): void {}
}
