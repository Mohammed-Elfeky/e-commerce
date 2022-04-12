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
  

  ngOnInit(): void {
    this.myService.GetProductsInCatagory(this.categoryId).subscribe(
       (data)=>{this.products=data;},
       (error)=>{console.log(error);}
    )
    console.log(this.categoryId);
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
