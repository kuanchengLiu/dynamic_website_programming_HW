import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
