import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-aside',
  templateUrl: './admin-aside.component.html',
  styleUrls: ['./admin-aside.component.css']
})
export class AdminAsideComponent implements OnInit {

  activeTab:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
