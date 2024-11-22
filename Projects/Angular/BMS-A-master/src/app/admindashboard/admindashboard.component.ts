import { Component, OnInit } from '@angular/core';
import { RegisterValidateService } from '../registerValidate.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  details: any;

  constructor( private reg:RegisterValidateService) { }

  ngOnInit() {
    this.reg.getImportBike().subscribe(data=>{
      this.details=data;
    })
  }

}
