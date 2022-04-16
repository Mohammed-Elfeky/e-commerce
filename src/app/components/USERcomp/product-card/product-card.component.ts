import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/app.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() public product:Product = new Product();

  link:string = "";

  imgSrc:string = "";

  constructor(private router: Router){}

  ngOnChanges(changes:any){
    //console.log(changes);
    this.link = `/User/product/${this.product.id}`;
    this.imgSrc = `${ this.product.images[0] }`
  }

  ngOnInit(): void {
    //console.log(this.product);
  }
  
}

// const img = document.getElementById("prdImg");
// console.log("==========="+img);
// img?.addEventListener('mouseover',function(){
//   this.hover(this);
// });
// img?.addEventListener('mouseout',this.unhover);