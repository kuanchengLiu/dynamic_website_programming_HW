import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Observable } from 'rxjs';
import { RequestKanban, ResponseKanban } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  private apiURL = 'https://virtserver.swaggerhub.com/YukinaMochizuki/Dynamic_Web_Project/1.1.0/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getAllKanban(): Observable<any> {
    const getter = this.http.get<any>(this.apiURL + 'kanban');
    return getter;
  }
  createKanban(requestKanba: RequestKanban[]): Observable<RequestKanban[]> {
    const creator = this.http.post<RequestKanban[]>(this.apiURL + 'kanban/', requestKanba)
    return creator;
  }
  putKanban(response: ResponseKanban[], uuid: string): Observable<ResponseKanban[]> {
    const putter = this.http.put<ResponseKanban[]>(this.apiURL + 'kanban/' + uuid, response)
    return putter;
  }
  deleteKanban(uuid: string, deleteArticle: boolean) {
    const deleter = this.http.delete<any>(this.apiURL + 'kanban/' + uuid + '/' + deleteArticle);
    return deleter;
  }
}
