import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProduct() {
    let products : Product[];

    products = [
      new Product(1, 'YoYo', 1700),
      new Product(2, 'Cocacola', 900),
      new Product(3, 'Fun-O', 200),
    ]
    return products
  }

  constructor() {

   }
}
