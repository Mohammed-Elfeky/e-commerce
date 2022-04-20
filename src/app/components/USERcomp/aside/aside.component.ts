import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @Input()
  categoryID:number=0;
  constructor() { }
  @Input()
  colors:any[]=[]
  
  ngOnInit(): void {
  }

  @Output() colorToProducts = new EventEmitter();
  getColorFromCollaps(color:string){
    console.log("event aside "+color);
      this.colorToProducts.emit(color);
  }
@Output() priceToProducts = new EventEmitter();
  getPriceFromCollaps(price:number){
    this.priceToProducts.emit(price);
  }

}
