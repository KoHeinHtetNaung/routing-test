import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product : Product | any;
  name :  any;
  noFound: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.name = this.activatedRoute.snapshot.params['name']

    let products = this.productService.getProduct();
    this.product = products.find((p) => (p.name == this.name))

    if(this.product) {
      this.noFound = false
    } else {
      this.noFound = true
    }
  }

  onBack():void {
    this.router.navigate(['product'])
  }

}
