import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/ADMINcopm/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './components/ADMINcopm/admin-products/admin-products.component';
import { AdminComponent } from './components/ADMINcopm/admin/admin.component';
import { CategoriesComponent } from './components/USERcomp/categories/categories.component';
import { ProductDetailsComponent } from './components/USERcomp/product-details/product-details.component';
import { ProductFormComponent } from './components/ADMINcopm/product-form/product-form.component';
import { ProductsComponent } from './components/USERcomp/products/products.component';
import { UserComponent } from './components/USERcomp/user/user.component';

let routes:Routes=[
  {path:'',redirectTo:'User',pathMatch:'full'},
  {path:"User",component:UserComponent,
    children:[
      {path: '', redirectTo: 'category',pathMatch:'full'},
      {path:"category",component:CategoriesComponent},
      {path:"category/:id",component:ProductsComponent},
      {path:"product/:id",component:ProductDetailsComponent}
    ]},
  {path:"Admin",component:AdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard',pathMatch:'full'},
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: 'products', component: AdminProductsComponent},
      {path:"AddProduct",component:ProductFormComponent},
      {path:"EditProduct/:id",component:ProductFormComponent} 
    ]},
  {path: '**', redirectTo:'User',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

