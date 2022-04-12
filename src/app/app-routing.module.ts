import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

let routes:Routes=[
  {path:'',redirectTo:'category',pathMatch:'full'},
  {path:"category",component:CategoriesComponent},
  {path:"category/:id",component:ProductsComponent},
  {path:"product/:id",component:ProductDetailsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

