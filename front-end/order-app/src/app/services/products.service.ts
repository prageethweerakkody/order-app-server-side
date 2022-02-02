import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = "http://localhost:3000/products";

  constructor(private _httpClient: HttpClient) { }

  getProducts(){
   return this._httpClient.get(this.baseUrl);
  }

  saveProduct(product: Product){
    return this._httpClient.post(this.baseUrl, product);
  }
}
