import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product/Crud/product-add/product-add.component';

const routes: Routes = [
{path:"",pathMatch:"full",component:ProductComponent},
{path:"Products",component:ProductComponent},
{path:"products/category/:categoryId",component:ProductComponent},
{path:"products/add",component:ProductAddComponent},
{path:"products/update",component:ProductAddComponent},
{path:"products/delete",component:ProductAddComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
