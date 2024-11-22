import { Component } from '@angular/core';
import { HomeServService } from './homeServ.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:HomeServService){}
  men(value:any){
    this.service.Store="ApperealMen";
    // alert(value);
  }
  women(value:any){
    this.service.Store="Appereal";
    // alert(value);
  }
}
