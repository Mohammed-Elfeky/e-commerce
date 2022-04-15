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

import { CollapseDropdownComponent } from './components/collapse-dropdown/collapse-dropdown.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminAsideComponent } from './components/admin-aside/admin-aside.component';



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
    ProductDetailsComponent,
    CollapseDropdownComponent,
    ProductSliderComponent,
    ProductInfoComponent,
    AdminProductsComponent,
    ProductFormComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminAsideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
