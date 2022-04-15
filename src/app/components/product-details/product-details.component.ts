import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  product:any;
  constructor(private myService:JsonDatabaseService,myRoute:ActivatedRoute) { 
    this.productId = myRoute.snapshot.params["id"];
  }
  images:any=[
      "assets/images/V Neck1.jpg",
      "assets/images/V Neck2.jpg",
      "assets/images/V Neck3.jpg",
      "assets/images/Tommy1.jpg",
  ]

  ngOnInit(): void {
    this.myService.GetProductDetails(this.productId).subscribe(
       (data)=>{
         this.product=data;
        },
       (error)=>{console.log(error);}
    )
  }
  
}
