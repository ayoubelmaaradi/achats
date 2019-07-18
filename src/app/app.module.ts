import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './controller/product-list/product-list.component';
import { ProductCreateComponent } from './controller/product-create/product-create.component';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CustomerCreateComponent } from './controller/customer-create/customer-create.component';
import { CustomerListComponent } from './controller/customer-list/customer-list.component';
import { OrderCreateComponent } from './controller/order-create/order-create.component';
import { OrderListComponent } from './controller/order-list/order-list.component';
import { OrderItemCreateComponent } from './controller/order-item-create/order-item-create.component';
import { OrderItemListComponent } from './controller/order-item-list/order-item-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent,
  },
  {
    path: 'create',
    component: ProductCreateComponent,
  },
  {
    path: 'createcustomer',
    component: CustomerCreateComponent,
  },
  {
    path: 'listcustomers',
    component: CustomerListComponent,
  },
  {
    path: 'createorder',
    component: OrderCreateComponent,
  },
  {
    path: 'listorders',
    component: OrderListComponent,
  },
  {
    path: 'createorderItem',
    component: OrderItemCreateComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    OrderCreateComponent,
    OrderListComponent,
    OrderItemCreateComponent,
    OrderItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
