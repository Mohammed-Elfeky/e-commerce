import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/USERcomp/categories/categories.component';
import { CategoryCardComponent } from './components/USERcomp//category-card/category-card.component';
import { NavComponent } from './components/USERcomp/nav/nav.component';
import { FooterComponent } from './components/USERcomp/footer/footer.component';
import { SliderComponent } from './components/USERcomp/slider/slider.component';
import { AsideComponent } from './components/USERcomp/aside/aside.component';
import { ProductsComponent } from './components/USERcomp/products/products.component';
import { ProductCardComponent } from './components/USERcomp/product-card/product-card.component';
import { ProductDetailsComponent } from './components/USERcomp/product-details/product-details.component';

import { CollapseDropdownComponent } from './components/USERcomp/collapse-dropdown/collapse-dropdown.component';
import { ProductSliderComponent } from './components/USERcomp/product-slider/product-slider.component';
import { ProductInfoComponent } from './components/USERcomp/product-info/product-info.component';
import { AdminProductsComponent } from './components/ADMINcopm/admin-products/admin-products.component';
import { ProductFormComponent } from './components/ADMINcopm/product-form/product-form.component';
import { AdminComponent } from './components/ADMINcopm/admin/admin.component';
import { AdminDashboardComponent } from './components/ADMINcopm/admin-dashboard/admin-dashboard.component';
import { AdminAsideComponent } from './components/ADMINcopm/admin-aside/admin-aside.component';
import { UserComponent } from './components/USERcomp/user/user.component';



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
    AdminAsideComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
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
