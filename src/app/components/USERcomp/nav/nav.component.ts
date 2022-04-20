import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonDatabaseService } from 'src/app/services/json-database.service';
import { Product } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logoWidth:string="auto"
  constructor(
    private actrouter:ActivatedRoute,
    private router:Router,
    private db:JsonDatabaseService
    ) { }
  isSearchBoxVisible:boolean=true;
  ngOnInit(): void {
  }
  whenClick(){
    if(this.logoWidth=="auto"){
      this.logoWidth="100%"
    }else{
      this.logoWidth="auto"
    }
  }
  whenBlur(){
   this.isSearchBoxVisible= false;
  }
  searchValue:string = "";
  commingData:Product[]=[];


  goSearch(){
    // this.router.navigate(['/User/category/search', {term: this.searchValue}]);
  }

  RealTimeSearch(){
    this.isSearchBoxVisible=true;
      if(this.searchValue=="") {
        this.commingData=[]
        return
      }
      this
      .db
      .GetProductByName(this.searchValue)
      .subscribe(
         (data)=>this.commingData=data
      )
  }



}
