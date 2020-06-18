import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Observable } from 'rxjs';
import { PostRequestEvent } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiURL = 'https://virtserver.swaggerhub.com/YukinaMochizuki/Dynamic_Web_Project/1.1.0/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getAllEvent(accountname: string, type: string): Observable<any> {
    const getter = this.http.get<any>(this.apiURL + 'event/' + accountname + '/' + type);
    return getter;
  }

  createEvent(requestKanba: PostRequestEvent[]): Observable<PostRequestEvent[]> {
    const creator = this.http.post<PostRequestEvent[]>(this.apiURL + 'event/', requestKanba)
    return creator;
  }
  patchEvent(response: PostRequestEvent[], uuid: string): Observable<PostRequestEvent[]> {
    const putter = this.http.put<PostRequestEvent[]>(this.apiURL + 'event/' + uuid, response)
    return putter;
  }
  deleteEvent(accountname: string, ) {
    const deleter = this.http.delete<any>(this.apiURL + 'event/' + accountname);
    return deleter;
  }
}
