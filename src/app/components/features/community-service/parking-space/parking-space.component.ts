import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { EventService } from 'src/app/service/event/event.service';
import { EventItem } from 'src/app/Account';
import * as $ from 'jquery';
@Component({
  selector: 'app-parking-space',
  templateUrl: './parking-space.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./parking-space.component.css']
})
export class ParkingSpaceComponent implements OnInit {
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
    $('.ui.dropdown').dropdown();
    this.eventService.getAllEvent("admin", "ParkingSpaceApplication").subscribe(response => {
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
  submitForm(): void {
    window.alert("您沒有權限！");
  }
}
