import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId:number = 0;
  constructor(private myService:JsonDatabaseService,myRoute:ActivatedRoute) { 
    this.productId = myRoute.snapshot.params["id"];
    console.log(this.productId);
  }
  images:any=[
      "assets/images/V Neck1.jpg",
      "assets/images/V Neck2.jpg",
      "assets/images/V Neck3.jpg",
      "assets/images/Tommy1.jpg",
     
  ]

  anything = "dhfhsdsd";
  product:any;
  ngOnInit(): void {
    this.myService.GetProductDetails(this.productId).subscribe(
       (data)=>{this.product=data;},
       (error)=>{console.log(error);}
    )
    console.log(this.product);
  }
  
   ngOnChanges(changes:any){
     this.myService.GetProductDetails(this.productId).subscribe(
       (data)=>{this.product=data;},
       (error)=>{console.log(error);}
    )
    console.log(this.product);
    //console.log(changes);
  }
}
