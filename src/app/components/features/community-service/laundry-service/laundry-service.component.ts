import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { EventService } from 'src/app/service/event/event.service';
import { EventItem } from 'src/app/Account';
import * as $ from 'jquery';
@Component({
  selector: 'app-laundry-service',
  templateUrl: './laundry-service.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./laundry-service.component.css']
})
export class LaundryServiceComponent implements OnInit {
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
    this.eventService.getAllEvent("admin", "EntrustLaundryToWash").subscribe(response => {
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
