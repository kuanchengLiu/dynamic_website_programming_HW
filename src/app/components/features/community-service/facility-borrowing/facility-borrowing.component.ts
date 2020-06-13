import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-facility-borrowing',
  templateUrl: './facility-borrowing.component.html',
  styleUrls: ['./facility-borrowing.component.css']
})

export class FacilityBorrowingComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
  ngOnInit(): void {
  }

}
