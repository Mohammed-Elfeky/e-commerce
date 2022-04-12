import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-dropdown',
  templateUrl: './collapse-dropdown.component.html',
  styleUrls: ['./collapse-dropdown.component.css']
})
export class CollapseDropdownComponent implements OnInit {
  @Input()
  testPRICE:number=0;
  rangeVal:any=50;
  isOpen:boolean=false;
  @Input()
  title:string="";
  colors:any=[
    "red",
    "black",
    "green",
    "brown",
    "red",
    "black",
    "green",
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.isOpen)
  }
  whenClickUp(){
    this.isOpen=!this.isOpen
  }
  whenMove(event:any){
    this.rangeVal=event.target.value;
  }
  whenclick(){
    this.testPRICE++
  }
}
