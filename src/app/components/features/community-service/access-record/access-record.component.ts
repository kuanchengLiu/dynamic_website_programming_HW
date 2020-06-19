import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-access-record',
  templateUrl: './access-record.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./access-record.component.css']
})
export class AccessRecordComponent implements OnInit {
  accessRecords = [];
  dtOptions: DataTables.Settings = {
    language: {
      url: "../../../../../assets/DataTables/language_zh-TW.json"
    },
  };

  constructor() { }
  ngOnInit(): void {
  }
}
