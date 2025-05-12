import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderComponent } from './components/order/order.component';
import { StockMomentComponent } from './components/stock-moment/stock-moment.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { ProductAddComponent } from './components/product/Crud/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product/Crud/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/Crud/product-delete/product-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CustomerComponent,
    OrderDetailComponent,
    OrderComponent,
    StockMomentComponent,
    SupplierComponent,
    UserComponent,
    NavComponent,
    FilterPipe,
   
    CategoryFilterPipe,
        ProductAddComponent,
        ProductUpdateComponent,
        ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
