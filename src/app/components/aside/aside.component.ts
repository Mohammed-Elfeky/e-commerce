import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @Input()
  testASIDE:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
