import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-access-record',
  templateUrl: './access-record.component.html',
  styleUrls: ['./access-record.component.css']
})
export class AccessRecordComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
  ngOnInit(): void {
  }

}
