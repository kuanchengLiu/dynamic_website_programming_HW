import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-payment-items',
  templateUrl: './payment-items.component.html',
  styleUrls: ['./payment-items.component.css']
})
export class PaymentItemsComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
  ngOnInit(): void {
  }

}
