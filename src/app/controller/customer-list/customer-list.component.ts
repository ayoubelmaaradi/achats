import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {Customer} from '../../model/customer.model';
import {ProductService} from '../../service/product.service';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Array<Customer> = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });
  }
}
