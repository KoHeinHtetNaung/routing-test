import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {


  products: Product[] = []

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProduct()
  }

}
