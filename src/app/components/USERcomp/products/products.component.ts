import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categoryId:number = 0;
  products:Product[] = [];

  constructor(private myService:JsonDatabaseService,private myRoute:ActivatedRoute) { 

    this.myRoute.params.subscribe( params => {
      if(params['id'] == 'search'){
        this.FindMatch(params['term'])
      }else{
        this.getCategoryProducts();
      }
    });
  }


  FindMatch(searchValue:string){
    console.log("search "+searchValue);
    this.myService.GetProductByName(searchValue).subscribe(
       (data)=>{this.products=data;},
       (error)=>{console.log(error);}
     )
  }


  getCategoryProducts(){
    this.myService.GetProductsInCatagory(this.categoryId).subscribe(
           (data)=>{this.products=data;},
           (error)=>{console.log(error);}
        )
  }
  getColorFromChild(color:string){
    console.log("event Products "+color);
    this.myService.GetProductsInCatagoryByColor(this.categoryId,color).subscribe(
       (data)=>{this.products=data;},
       (error)=>{console.log(error);}
     )
  }
  getPriceFromChild(price:number){
    this.myService.GetProductsInCatagoryByPrice(this.categoryId,price).subscribe(
      (data)=>{this.products=data;},
      (error)=>{console.log(error);}
    )
  }
  
  ngOnInit(): void { }

}
