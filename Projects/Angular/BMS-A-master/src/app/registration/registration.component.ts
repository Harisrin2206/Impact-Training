import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterValidateService } from '../registerValidate.service';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  gologin() {
    this.route.navigate(['/login']);
  }

  // RegisterForm = new FormGroup({
  //   firstname: new FormControl(),
  //   Phoneno: new FormControl(),
  //   email: new FormControl(),
  //   password: new FormControl(),
  //   confirm: new FormControl(),
  // });

  constructor(
    private fb: FormBuilder,
    private Reg: RegisterValidateService,
    private route: Router
  ) {}

  RegisterForms = this.fb.group(
    {
      firstname: [, [Validators.required, Validators.pattern('^(?!.*([a-zA-Z])\\1\\1)[a-zA-Z]+$')]],
      Phoneno: [, [Validators.required,Validators.pattern('^[6-9](?!.*(\\d)\\1{4})\\d{9}$')]],
      email: [,[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@gmail\.com$')]],
      password: [, [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!_])[A-Za-z0-9@#$%^&+=!_]{7,12}$')]],
      confirm: [, [Validators.required,]],
    },
    { validator: ConfirmedValidator('password', 'confirm') }
  );

  submitForm() {
    this.Reg.addUserInfo(this.RegisterForms.value).subscribe((data) => {
      alert('Form Submitted');
      this.route.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

}


