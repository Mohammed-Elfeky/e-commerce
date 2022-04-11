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
  "priceInSale": number,
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
