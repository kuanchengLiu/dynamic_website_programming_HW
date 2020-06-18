import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Observable } from 'rxjs';
import { RequestKanban, ResponseKanban } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  private apiURL = 'http://test32.yukina.tw:8000/api/v1/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS, PATCH',
      'Authorization': 'authkey',
      'Access-Control-Max-Age': '86400',
    })
  };
  getAllKanban(): Observable<any> {
    const getter = this.http.get<any>(this.apiURL + 'kanban',this.httpOptions);
    return getter;
  }
  createKanban(requestKanba: RequestKanban[]): Observable<RequestKanban[]> {
    const creator = this.http.post<RequestKanban[]>(this.apiURL + 'kanban/', requestKanba)
    return creator;
  }
  patchKanban(response: ResponseKanban[], uuid: string): Observable<ResponseKanban[]> {
    const putter = this.http.patch<ResponseKanban[]>(this.apiURL + 'kanban/' + uuid, response)
    return putter;
  }
  deleteKanban(uuid: string) {
    const deleter = this.http.delete<any>(this.apiURL + 'kanban/' + uuid );
    return deleter;
  }
}
