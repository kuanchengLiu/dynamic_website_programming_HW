import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-laundry-service',
  templateUrl: './laundry-service.component.html',
  styleUrls: ['./laundry-service.component.css']
})
export class LaundryServiceComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
  ngOnInit(): void {
  }

}
