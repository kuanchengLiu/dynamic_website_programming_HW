import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { EventService } from 'src/app/service/event/event.service';
import { EventItem } from 'src/app/Account';

@Component({
  selector: 'app-access-record',
  templateUrl: './access-record.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./access-record.component.css']
})
export class AccessRecordComponent implements OnInit {
  eventItem: EventItem[] = [];
  dtOptions: DataTables.Settings = {
    language: {
      url: "../../../../../assets/DataTables/language_zh-TW.json"
    },
  };
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private eventService: EventService) { }
  ngAfterViewInit() {
    this.eventService.getAllEvent("admin", "PersonnelAccessRecords").subscribe(response => {
      this.eventItem = response.map(function (value) {
        value.createDate = new Date(value.createDate).toLocaleString("zh-TW", { hour12: false });
        value.lastEditDate = new Date(value.lastEditDate).toLocaleString("zh-TW", { hour12: false });
        return value;
      });
      console.log(this.eventItem);
      this.dtTrigger.next();
    })
  }
  ngOnInit(): void {
  }
}
