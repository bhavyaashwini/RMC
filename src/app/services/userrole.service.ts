// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserroleService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Userrole } from '../models/userrole';
@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
 starCreate(data:any): Observable<Userrole[]> {
    return this.http.post<Userrole[]>(
      `${this.baseUrl + '/admin/user_role/create'}`,
      data
    );
  }
 
//Vendor Name List
starList(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl + '/admin/user_role/all'}`, data);
}
starDelete(data: any): Observable<Userrole[]>{
  return this.http.put<Userrole[]>(`${this.baseUrl + '/admin/user_role/delete'}`, data);
}
starUpdate(data: any):Observable<Userrole[]>{
  return this.http.put<Userrole[]>(`${this.baseUrl + '/admin/user_role/edit'}`, data)
}
}
