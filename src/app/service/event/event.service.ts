import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Observable } from 'rxjs';
import { EventItem, EventPatchRequest } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiURL = 'http://api.test32.yukina.tw/api/v1/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getAllEvent(accountname: string, type: string): Observable<EventItem[]> {
    const getter = this.http.get<EventItem[]>(this.apiURL + 'event/' + accountname + '/' + type);
    return getter;
  }
  patchEvent(response: EventPatchRequest[], uuid: string): Observable<any> {
    const putter = this.http.put<any>(this.apiURL + 'event/' + uuid, response)
    return putter;
  }
  deleteEvent(accountname: string,) {
    const deleter = this.http.delete<any>(this.apiURL + 'event/' + accountname);
    return deleter;
  }
}
