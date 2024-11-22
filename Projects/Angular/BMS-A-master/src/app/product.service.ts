import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }
    getProducts(){
      return this.http.get('http://localhost:3000/Product');
    }

    getProductsDescription(){
      return this.http.get('http://localhost:3000/productDescription');
    }
    getAppereal(){
      return this.http.get('http://localhost:3000/Appereal');
    }
    getAccessories(){
      return this.http.get('http://localhost:3000/Accessories');
    }
}
