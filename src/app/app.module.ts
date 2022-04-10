import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
let routes:Routes=[
  {path:'',redirectTo:'category',pathMatch:'full'},
  {path:"category",component:CategoriesComponent},
  {path:"category/:id",component:ProductsComponent},
  {path:"product/:id",component:ProductDetailsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryCardComponent,
    NavComponent,
    FooterComponent,
    SliderComponent,
    AsideComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
