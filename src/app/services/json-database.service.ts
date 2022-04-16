import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../app.component';

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




  BaseURL = "http://localhost:3000";
  constructor(private myHttp: HttpClient) { }

  GetAllCategories(){
    return this.myHttp.get<category[]>(`${this.BaseURL}/Categories`);
  }
  GetAllProducts(){
    console.log(`${this.BaseURL}/Products`);
    return this.myHttp.get<product[]>(`${this.BaseURL}/Products`);
  }
  GetProductsInCatagory(_CategorieId:number){
    return this.myHttp.get<product[]>(`${this.BaseURL}/Products?CategorieId=${_CategorieId}`);
  }
  GetProductByName(_name:string){
    console.log(`${this.BaseURL}/Products?Name_like=.*${_name}.*`);
    return this.myHttp.get<product[]>(`${this.BaseURL}/Products?Name_like=.*${_name}.*`);
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
    console.log(`${this.BaseURL}/Products?id=${_productId}`);
    return this.myHttp.get<product>(`${this.BaseURL}/Products?id=${_productId}`);
  }
  AddNewProduct(_product:product){
    return this.myHttp.post(`${this.BaseURL}/products`,_product);
  }

  UpdateProductByID(id:any, product:any){
    return this.myHttp.put(`${this.BaseURL}/products/${id}`,product);
  }
  DeleteProduct(_productId:number){
    console.log(`${this.BaseURL}/Products?id=${_productId}`);
    return this.myHttp.delete(`${this.BaseURL}/Products/${_productId}`);
  }
}

