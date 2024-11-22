import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public productList = new BehaviorSubject<any>([])
public cartitemlist:any=[]
public counter:number=1;
constructor() { }
cartProducts(){
  return this.productList.asObservable();
}
//add to cart
addtocart(product:any){
this.cartitemlist.push(product);
this.productList.next(this.cartitemlist)
this.gettotalprice();
}

//total price
gettotalprice():number{
  let grandtotal = 0;
  this.cartitemlist.map((a:any)=>{
    grandtotal +=a.total;
  })
  return grandtotal;
}

//empty all items in cart
removeAll(){
  this.cartitemlist=[]
  this.productList.next(this.cartitemlist);
}

//remove single items in cart
removeoneitem(product:any){
this.cartitemlist.map((a:any,index:any)=>{
  if(product.id === a.id)
  this.cartitemlist.splice(index,1)
})
this.productList.next(this.cartitemlist);

}

//increament and decrement in cart
updateCartItems(items: number) {
  this.productList.next(items);
}

}
