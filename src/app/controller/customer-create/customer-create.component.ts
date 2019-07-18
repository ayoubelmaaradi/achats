import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {Customer} from '../../model/customer.model';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {


  constructor(private customerService: CustomerService) {
  }

  private customer: Customer = new Customer(0, '', '',  '',  '', '' );
  private customers: Customer[] = [];


  public addCustomer() {
    this.customers.push(new Customer(this.customer.id, this.customer.name, this.customer.tele, this.customer.email,
      this.customer.adress, this.customer.ice));
    console.log(this.customer);
    this.customerService.createCustomer(new Customer(this.customer.id, this.customer.name, this.customer.tele,
      this.customer.email, this.customer.adress, this.customer.ice)).subscribe();
  }

  ngOnInit() {
  }
}
