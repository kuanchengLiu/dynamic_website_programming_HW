import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  active:string = "";
  ngAfterViewInit() {
    $('.menu.browse').dropdown();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
