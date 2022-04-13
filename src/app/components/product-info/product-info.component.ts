import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../app.component';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
 @Input()
  product:Product=new Product();

   product_details:Product=new Product();
  images:any;
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
        this.product_details = changes['product'].currentValue[0]
}

}

