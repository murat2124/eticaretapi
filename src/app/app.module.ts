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
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product/Crud/product-add/product-add.component';

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
    RouterModule.forRoot([
      { path: '', component: ProductComponent }, // Yönlendirme örneği
      { path: 'products', component: ProductAddComponent },
      // Diğer rotalar...
    ]),
    ProductModule,  // ProductModule'u buraya dahil ettik
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
