import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterValidateService } from '../registerValidate.service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent {
  email:any=sessionStorage.getItem('email');
  usersuccess=false;
  @Input() cartDataCount:any;
  constructor(public authService: AuthService, private service: RegisterValidateService) {
    this.usersuccess=Boolean(sessionStorage.getItem("usersuccess" ))||this.authService.userlogin
    this.ngOnInit();
  }
  registerdetail:any='';
  id:any;
  firstname:any;
  logout(){
    this.authService.userlogin=false;
    this.usersuccess=false;
    sessionStorage.clear();
    this.ngOnInit();
  }
  data:any;
  ngOnInit(){
     this.service.getData().subscribe((data)=>{
      this.registerdetail=data;

     for(var i=0;i<this.registerdetail.length;i++){
      if(this.email==this.registerdetail[i].email){
         console.log(this.email);
         this.id=i;
         console.log(this.id);
      }
     }
     this.firstname=this.registerdetail[this.id].firstname;
    })

  }
  }


