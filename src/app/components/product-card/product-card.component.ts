import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/app.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product:Product = new Product();

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.product);
  }

}
