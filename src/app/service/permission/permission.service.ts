import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Permission } from 'src/app/Account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
  
export class PermissionService {

  private apiURL = 'https://virtserver.swaggerhub.com/YukinaMochizuki/Dynamic_Web_Project/1.1.0/';

  
  constructor(private http: HttpClient, private messageService: MessageService) { 
    
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  checkPermission(permission: Permission): Observable<Permission>{
    const permissionChecker = this.http.post<Permission>(this.apiURL+'permission/check', permission);
    return permissionChecker;
  }
}
