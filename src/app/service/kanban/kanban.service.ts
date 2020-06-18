import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Observable } from 'rxjs';
import { RequestKanban, ResponseKanban } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  private apiURL = 'http://api.test32.yukina.tw/api/v1/';

  constructor(private http: HttpClient, private messageService: MessageService) { }


  getAllKanban(): Observable<any> {
    const getter = this.http.get<any>(this.apiURL + 'kanban/');
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
