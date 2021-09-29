import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Student, MessageTemplate} from './student.model';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyDataServiceService {
 
  
  apiUrl ="http://dev.myrmc.in:4001/api/v1"
  constructor(private http: HttpClient) { }

  // message template module 
    AddMessageTemplate(data: any): Observable<any> {
      return this.http.post<MessageTemplate[]>(`${this.apiUrl}/admin/message_template/create`, data);
    }
}
