import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Product } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  userSubscription: Subscription=new Subscription();
  productId:number = 0;
  product:any;


  constructor(
    private myService:JsonDatabaseService,
    private myRoute:ActivatedRoute
  ){}


  images:any=[
      "assets/images/V Neck1.jpg",
      "assets/images/V Neck2.jpg",
      "assets/images/V Neck3.jpg",
      "assets/images/Tommy1.jpg",
  ]

  ngOnInit(): void {

    //every time id changes fetch the data again
    this.myRoute.params.subscribe(param =>{
        
        this.productId = this.myRoute.snapshot.params["id"];

        this.myService.GetProductDetails(this.productId).subscribe(
           (data)=>{
             this.product=data;
            },
           (error)=>{console.log(error);}
        )

    });

  }

}
