import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }
}
