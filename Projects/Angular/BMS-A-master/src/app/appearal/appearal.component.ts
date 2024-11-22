import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import {HttpClient} from '@angular/common/http'
import { HomeServService } from '../home/homeServ.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-appearal',
  templateUrl: './appearal.component.html',
  styleUrls: ['./appearal.component.css']
})
export class AppearalComponent implements OnInit {
  allProduct: any = '';
  requiredProduct: any = '';
  finalProduct:any="";
  public weddings:any;
  title:any;
  titleDescription:any;
  p:number=1;
  currentPage: number = 1;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,private http:HttpClient, private service:HomeServService, public services:ProductService,public cart:CartService,
  ) {}

  sample:any=""
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/"+this.service.Store).subscribe(data=>{
      this.sample=data;
    })
  // }
  // ngOnInit():void{
    this.http.get<any>("http://localhost:3000/"+this.service.Store).subscribe(data=>
      {
        this.weddings=data;
        this.weddings.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.Price})
      });
    });
    }

    Search(){
      if(this.title==""){
        this.ngOnInit();
      }
      else{
        this.weddings=this.weddings.filter((result: { title: string; }) =>{
          return result.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
        });
      }
    }
    loadData(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    //on page change
    onPageChange(page: number): void {
      this.currentPage = page;
      this.loadData();
    }

    //add to cart

    addtocart(item:any){
    this.cart.addtocart(item);
    console.log(item)
    }


  }

