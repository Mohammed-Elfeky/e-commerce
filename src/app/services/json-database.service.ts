import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

  //! run with this line
  //! json-server --watch db.json --port 3002

interface product{
  "id": number,
  "CategorieId": number,
  "color": string,
  "numberOfAvailableItems": number,
  "numberOfSoldItems": number,
  "inSale": boolean,
  "priceBeforeSale": number,
  "images": string[],
  "Name": string,
  "price": number,
  "brand": string,
  "Description": string
}

interface category{
  "id": number,
  "Name": string,
  "Description": string
}


@Injectable({
  providedIn: 'root'
})
export class JsonDatabaseService {




  BaseURL = "http://localhost:3002";
  constructor(private myHttp: HttpClient) { }

  GetAllCategories(){
    return this.myHttp.get<category>(`${this.BaseURL}/Categories`);
  }
  GetProductsInCatagory(_CategorieId:number){
    return this.myHttp.get<product[]>(`${this.BaseURL}/Products?CategorieId=${_CategorieId}`);
  }
  GetProductsInCatagoryByColor(_CategorieId:number,_color:string){
    console.log(`${this.BaseURL}/Products?CategorieId=${_CategorieId}&color=${_color}`);
    return this.myHttp.get<product[]>(`${this.BaseURL}/Products?CategorieId=${_CategorieId}&color=${_color}`);
  }
  GetProductsInCatagoryByPrice(_CategorieId:number,_price:number){
    console.log(`${this.BaseURL}/Products?CategorieId=${_CategorieId}&price_lte=${_price}`);
    return this.myHttp.get<product[]>(`${this.BaseURL}/Products?CategorieId=${_CategorieId}&price_lte=${_price}`);
  }
  GetProductDetails(_productId:number){
    return this.myHttp.get<product>(`${this.BaseURL}/Products?id=${_productId}`);
  }
  AddNewProduct(_product:product){

  }
  UpdateProduct(_product:product){

  }
  DeleteProduct(_productId:number){

  }
}
