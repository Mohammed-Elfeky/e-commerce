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

  constructor(private myService:JsonDatabaseService,myRoute:ActivatedRoute) { 
    this.categoryId = myRoute.snapshot.params["id"];
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
  


  ngOnInit(): void {
    this.myService.GetProductsInCatagory(this.categoryId).subscribe(
       (data)=>{this.products=data;},
       (error)=>{console.log(error);}
    )
    console.log(this.categoryId);
    console.log(this.products);

    // this.myService.GetProductsInCatagoryByColor(this.categoryId,'black').subscribe(
    //   (data)=>{this.products=data;},
    //   (error)=>{console.log(error);}
    // )
    // this.myService.GetProductsInCatagoryByPrice(this.categoryId,100).subscribe(
    //   (data)=>{this.products=data;},
    //   (error)=>{console.log(error);}
    // )
  }

}
