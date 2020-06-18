import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Observable } from 'rxjs';
import { RequestArticle, ResponseArticle } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiURL = 'https://virtserver.swaggerhub.com/YukinaMochizuki/Dynamic_Web_Project/1.1.0/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllArticle(): Observable<any> {
    const getter = this.http.get<any>(this.apiURL + 'article');
    return getter;
  }
  createEvent(requestKanba: RequestArticle[]): Observable<RequestArticle[]> {
    const creator = this.http.post<RequestArticle[]>(this.apiURL + 'article/', requestKanba)
    return creator;
  }
  patchEvent(response: ResponseArticle, uuid: string): Observable<ResponseArticle> {
    const putter = this.http.patch<ResponseArticle>(this.apiURL + 'article/' + uuid, response)
    return putter;
  }
  deleteEvent(accountname: string, event_uuid: boolean) {
    const deleter = this.http.delete<any>(this.apiURL + 'article/' + accountname + '/' + event_uuid);
    return deleter;
  }
}

