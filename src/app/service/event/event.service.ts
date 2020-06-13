import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Observable } from 'rxjs';
import { PostRequestEvent, PutRequestEvent } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiURL = 'https://virtserver.swaggerhub.com/YukinaMochizuki/Dynamic_Web_Project/1.1.0/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getAllEvent(): Observable<any> {
    const getter = this.http.get<any>(this.apiURL + 'article');
    return getter;
  }

  createEvent(requestKanba: PostRequestEvent[]): Observable<PostRequestEvent[]> {
    const creator = this.http.post<PostRequestEvent[]>(this.apiURL + 'event/', requestKanba)
    return creator;
  }
  putEvent(response: PutRequestEvent[], uuid: string): Observable<PutRequestEvent[]> {
    const putter = this.http.put<PutRequestEvent[]>(this.apiURL + 'event/' + uuid, response)
    return putter;
  }
  deleteEvent(accountname: string, event_uuid: boolean) {
    const deleter = this.http.delete<any>(this.apiURL + 'event/' + accountname + '/' + event_uuid);
    return deleter;
  }
}
