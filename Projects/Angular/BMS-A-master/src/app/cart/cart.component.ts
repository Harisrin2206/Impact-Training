import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
public products!:any[];
public grandtotal:number=0;
total:any;
  constructor(public cart:CartService) { }
  ngOnInit():void{
    this.cart.cartProducts().subscribe(res=>{
      this.products=res;
      this.grandtotal = this.cart.gettotalprice();
    })
    }

//remove all items in cart
emptycart(){
  this.cart.removeAll();
}

//remove one item in cart
removeone(item:any){
  this.cart.removeoneitem(item);
}
increase(item: any) {
  item.quantity++;
  item.total = item.Price * item.quantity;
  this.calculateGrandTotal();
}

decrease(item: any) {
  if (item.quantity > 1) {
    item.quantity--;
    item.total = item.Price * item.quantity;
    this.calculateGrandTotal();
  }
}
hello:any;
updateQuantity(item: any) {
  if (item.quantity < 1) {
    item.quantity = 1;
  }
  item.total = item.Price * item.quantity;
  this.hello = item.total;
  console.log(item.Price[2]);
  this.calculateGrandTotal();
}

calculateGrandTotal() {
  this.grandtotal = this.products.reduce((total, item) => total + item.total, 0);
}
}


