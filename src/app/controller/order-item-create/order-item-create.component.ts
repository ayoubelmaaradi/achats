import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {Orderitem} from '../../model/orderitem.model';
import {OrderitemService} from '../../service/orderitem.service';

@Component({
  selector: 'app-order-item-create',
  templateUrl: './order-item-create.component.html',
  styleUrls: ['./order-item-create.component.css']
})
export class OrderItemCreateComponent implements OnInit {

  private orderItem: Orderitem = new Orderitem(0, 0, null, null);
  private orderItems: Orderitem[] = [];

  constructor(private orderItemService: OrderitemService) {
  }

  public addOrderItem() {
    this.orderItems.push(new Orderitem(this.orderItem.id, this.orderItem.qte, this.orderItem.product, this.orderItem.order));
    console.log(this.orderItem)
    this.orderItemService.createOrderitem(new Orderitem(this.orderItem.id, this.orderItem.qte, this.orderItem.product,
      this.orderItem.order)).subscribe();
  }


  ngOnInit() {
  }

}
