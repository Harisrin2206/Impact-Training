import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterValidateService } from '../registerValidate.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
})
export class ExplorerComponent implements OnInit {
  allProduct: any = '';
  requiredProduct: any = '';
  finalProduct:any="";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private route1:Router,
    private fb: FormBuilder,
    private Reg: RegisterValidateService,

  ) {
    this.productService.getProductsDescription().subscribe((product) => {
      this.allProduct = product;

      this.route.paramMap.subscribe((url) => {
        this.requiredProduct = url.get('check');
        this.finalProduct = this.allProduct.find( (product:any) => this.requiredProduct == product.ProductName );
      });
    });
  }
 menu_open(){
  const model:any =document.querySelector(".modal");
  model.showModal();
 }
 close_show(){
  const modal:any = document.querySelector('.modal');
  const closeModal:any = document.querySelector('#close_show');
  modal.close();

 }


formsImport = this.fb.group(
  {
    firstname: [, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    Phoneno: [, [Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]],
    // mobilenumber:[,[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
    email: [,[Validators.required, Validators.pattern('^([a-zA-Z0-9.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$')]],

    color:[,[Validators.required]]
  }
);

submitForm() {
    this.Reg.importBike(this.formsImport.value).subscribe((data) => {
      alert('ho')
      this.route1.navigate(['/load']);
    });



}

  ngOnInit() {}
}
