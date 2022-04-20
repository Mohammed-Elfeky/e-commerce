import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  dataArr:any=[
    {catId:1,name:"Office Supplies",Description:"used regularly in an office environment to perform departmental personnel's daily work assignments.",src:"assets/images/cats/1.jpg"},
    {catId:2,name:"Men's Sweaters",Description:"high quality men's sweaters made of cotton",src:"assets/images/cats/2.jpeg"},
    {catId:3,name:"Furniture",Description:"furniture category",src:"assets/images/cats/3.jpg"},
    {catId:4,name:"laptops",Description:"Computer_Electronic",src:"assets/images/cats/4.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
