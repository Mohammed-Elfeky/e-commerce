import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logoWidth:string="auto"
  constructor() { }

  ngOnInit(): void {
  }
  whenClick(){
    if(this.logoWidth=="auto"){
      this.logoWidth="100%"
    }else{
      this.logoWidth="auto"
    }
  }
}
