import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  allProduct: any = '';
  requiredProduct: any = '';
  finalProduct:any="";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productService.getProductsDescription().subscribe((product) => {
      this.allProduct = product;

      this.route.paramMap.subscribe((url) => {
        this.requiredProduct = url.get('check');
        this.finalProduct = this.allProduct.find( (product:any) => this.requiredProduct == product.id );
        console.log(this.finalProduct)
      });
    });
  }

  ngOnInit() {}
}
