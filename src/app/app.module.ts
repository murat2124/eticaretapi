import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category/category.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderComponent } from './components/order/order.component';
import { StockMomentComponent } from './components/stock-moment/stock-moment.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { UserComponent } from './components/user/user.component';
import { NavComponent } from './components/nav/nav.component';

import { ProductModule } from './components/product/product/product.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CustomerComponent,
    OrderDetailComponent,
    OrderComponent,
    StockMomentComponent,
    SupplierComponent,
    UserComponent,
    NavComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
    
      
      // Diğer rotalar...
    ]),
    ProductModule,  // ProductModule'u buraya dahil ettik
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
