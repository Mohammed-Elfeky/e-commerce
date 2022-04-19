import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-collapse-dropdown',
  templateUrl: './collapse-dropdown.component.html',
  styleUrls: ['./collapse-dropdown.component.css']
})
export class CollapseDropdownComponent implements OnInit {
  @Input()
  categoryID:number=0;
  rangeVal:any=50;
  isOpen:boolean=false;
  @Input()
  title:string="";
  colors:any=[
    "gray",
    "black",
    "white",
    "silver",
    "red",
    "yellow",
    "brown",
    "green",
    "blue",
    "burlywood"
  ];
  constructor(private myService:JsonDatabaseService,myRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.isOpen)
  }
  whenClickUp(){
    this.isOpen=!this.isOpen
  }

  @Output() priceEvent = new EventEmitter();
  whenMove(event:any){
    this.rangeVal=event.target.value;
    this.priceEvent.emit(this.rangeVal);
  }

  @Output() colorEvent = new EventEmitter();
  getColor(color:string){
    this.colorEvent.emit(color);
  }

}
