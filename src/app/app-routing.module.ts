import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product/Crud/product-add/product-add.component';
import { ProductDeleteComponent } from './components/product/Crud/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/Crud/product-update/product-update.component';
import { StockMovementsComponentComponent } from './components/stock-moment/stock-movements-component/stock-movements-component.component';

const routes: Routes = [
{path:"",pathMatch:"full",component:ProductComponent},
{path:"Products",component:ProductComponent},
{path:"products/category/:categoryId",component:ProductComponent},
{path:"products/add",component:ProductAddComponent},
{path:"products/update",component:ProductUpdateComponent},
{path:"products/delete",component:ProductDeleteComponent},
 { path: 'stock/movements', component: StockMovementsComponentComponent }, // Yolu ekliyoruz
  { path: '', redirectTo: '/stock-movements', pathMatch: 'full' } // Varsayılan sayfa yönlendirmesi



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
