import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-facility-borrowing',
  templateUrl: './facility-borrowing.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./facility-borrowing.component.css']
})
export class FacilityBorrowingComponent implements OnInit {
  dtOptions: DataTables.Settings = {
    language: {
      url: "../../../../../assets/DataTables/language_zh-TW.json"
    },
  };

  constructor() { }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
  ngOnInit(): void {
  }

}
