import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
  images:any=[
      "assets/images/V Neck1.jpg",
      "assets/images/V Neck2.jpg",
      "assets/images/V Neck3.jpg",
      "assets/images/Tommy1.jpg",
     
  ]
  ngOnInit(): void {
  }
}
