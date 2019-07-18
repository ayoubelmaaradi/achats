import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order.model';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  private order: Order = new Order(0, '', '');
  private orders: Order[] = [];


  constructor(private orderService: OrderService) {
  }

  public addOrder() {
    this.orders.push(new Order(this.order.id, this.order.status, this.order.dateOrdering));
    console.log(this.order);
    this.orderService.createOrder(new Order(this.order.id, this.order.status, this.order.dateOrdering)).subscribe();
  }

  ngOnInit() {
  }

}
