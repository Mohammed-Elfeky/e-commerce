import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/app.component';
import { JsonDatabaseService } from 'src/app/services/json-database.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  dataArr:Category[]=[];
  constructor(private database : JsonDatabaseService) { 
    this.database.GetAllCategories().subscribe(
      (data)=>{this.dataArr=data;},
      (err: any)=>{console.log(err);}
    );
  }
  ngOnInit(): void {
  }

}
