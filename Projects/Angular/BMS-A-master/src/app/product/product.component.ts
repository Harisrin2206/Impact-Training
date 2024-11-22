import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  allProducts:any="";
   constructor(private productData:ProductService){
        productData.getProducts().subscribe( product => this.allProducts=product );
   }
}
