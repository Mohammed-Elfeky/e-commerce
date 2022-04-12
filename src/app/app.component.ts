import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ecommerce';
}

export class Product{
  "id": number;
  "CategorieId": number;
  "color": string;
  "numberOfAvailableItems": number;
  "numberOfSoldItems": number;
  "inSale": boolean;
  "priceBeforeSale": number;
  "images": string[];
  "Name": string;
  "price": number;
  "brand": string;
  "Description": string;
}

export class Category{

}
