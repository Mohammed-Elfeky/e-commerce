import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logoWidth:string="auto"
  constructor(private actrouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  whenClick(){
    if(this.logoWidth=="auto"){
      this.logoWidth="100%"
    }else{
      this.logoWidth="auto"
    }
  }
  searchValue:string = "";
  goSearch(){
    console.log(this.searchValue)
    this.router.navigate(['/User/category/search', {term: this.searchValue}]);
  }
}
