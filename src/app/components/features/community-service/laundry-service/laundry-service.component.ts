import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-laundry-service',
  templateUrl: './laundry-service.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./laundry-service.component.css']
})
export class LaundryServiceComponent implements OnInit {
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
