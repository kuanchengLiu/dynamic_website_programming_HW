import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-payment-items',
  templateUrl: './payment-items.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payment-items.component.css']
})
export class PaymentItemsComponent implements OnInit {
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
