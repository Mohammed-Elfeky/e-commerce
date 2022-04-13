import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/app.component';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit, OnChanges {
  @Input()
  product:Product=new Product();
  images:any;
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
        this.images=changes['product'].currentValue[0]['images']
    }
}
}
