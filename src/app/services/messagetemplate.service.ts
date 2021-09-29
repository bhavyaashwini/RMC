import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Messagetemplate } from '../models/messagetemplate';

@Injectable({
  providedIn: 'root'
})
export class MessagetemplateService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
  createMessageTemplate(data:any): Observable<Messagetemplate[]> {
    return this.http.post<Messagetemplate[]>(
      `${this.baseUrl + '/admin/message_template/create'}`,
      data
    );
  }
 
//Vendor Name List
MessageList(data:any): Observable<Messagetemplate[]> {
  return this.http.post<Messagetemplate[]>(`${this.baseUrl + '/admin/message_template/all'}`, data);
}
}
