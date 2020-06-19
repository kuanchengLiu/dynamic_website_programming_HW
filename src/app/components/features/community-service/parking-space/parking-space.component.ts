import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-parking-space',
  templateUrl: './parking-space.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./parking-space.component.css']
})
export class ParkingSpaceComponent implements OnInit {
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
