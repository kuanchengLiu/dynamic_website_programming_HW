import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Account } from './Account';

@Injectable({
  providedIn: 'root'
})

export class AccountServiceService {
  private apiURL = 'https://virtserver.swaggerhub.com/YukinaMochizuki/Dynamic_Web_Project/1.1.0/'

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllAccount(): Observable<any> {
    const accounts = this.http.get<any>(this.apiURL + 'account');
    return accounts;
  }
  createAccount(account: Account[]): Observable<Account[]> {
    const creator = this.http.post<Account[]>(this.apiURL+'account/', account)
    return creator;
  }
  
  // createAccount(account: Account): Observable<Account[]>{
  //   return this.http.post(this.apiURL+'account', account)
  //     .pipe(
  //       tap(_ => this.log('fetched heroes')),
  //       catchError(this.handleError<Account[]>('getHeroes', []))
  //     );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


}



