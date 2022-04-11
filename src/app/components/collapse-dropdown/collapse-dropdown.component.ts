import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-dropdown',
  templateUrl: './collapse-dropdown.component.html',
  styleUrls: ['./collapse-dropdown.component.css']
})
export class CollapseDropdownComponent implements OnInit {
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
    "brown",
    "green",
    "brown",
    "red",
    
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.isOpen)
  }
  whenClickUp(){
    console.log("hi")
    this.isOpen=!this.isOpen
  }
}
