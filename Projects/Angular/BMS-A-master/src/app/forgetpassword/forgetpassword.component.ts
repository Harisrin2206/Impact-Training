import { HttpClient } from '@angular/common/http';
import { Component, OnInit,} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { RegisterValidateService } from '../registerValidate.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit{


  update:FormGroup

  // Email:any=sessionStorage.getItem('email');

  constructor( private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private service:RegisterValidateService) {
  this.update = this.fb.group({
    email: [, Validators.required],
    password:[,Validators.required],
  })
    }
    // forgotPassword( email:any) {
    //   console.log(email);
    //
    // }
   Email:any =sessionStorage.getItem('email');
    email: any;
    registerdetails:any='';
    idvalue:any;
    password:any;
   ngOnInit(){
    this.service.getData().subscribe((data)=>{
      this.registerdetails=data;
      alert(this.registerdetails.length)
      alert(this.Email);
      for(var i=0;i<this.registerdetails.length;i++){
        if(this.Email==this.registerdetails[i].email){
          console.log(this.Email);
          this.idvalue=i;
          console.log(this.idvalue);
          alert('hii');
        }
      }
        this.email=this.registerdetails[this.idvalue].email;
        this.password=this.registerdetails[this.idvalue].password;
        this.idvalue++;
        this.update.controls['email'].setValue(this.email);
        this.update.controls['password'].setValue(this.password);
        this.update.markAsPristine();
    })
 }
 updatePassword(data:any){
  alert(this.idvalue);
  if(!this.update.pristine){
    let updated={
      email: data.email,
      password :data.password,
    }
  this.service.updateUserInfo(updated,this.idvalue).subscribe((Response)=>{
    alert("updated")
  })
  }
  else{
    alert("not update");
  }

 }
}

// "firstname": "Arunkumar",
// "Phoneno": "9597374379",
// "email": "ajayarun348@gmail.com",
// "password": "Arun@123",
// "confirm": "Arun@123",
// "id": 2
