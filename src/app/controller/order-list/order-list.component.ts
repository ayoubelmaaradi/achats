import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {OrderService} from '../../service/order.service';
import {Order} from '../../model/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Array<Order> = [];


  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getAll().subscribe(data => {
      this.orders = data;
    });
  }


}
