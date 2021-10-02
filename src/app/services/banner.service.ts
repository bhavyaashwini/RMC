import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
  createBanner(data:any): Observable<Banner[]> {
    return this.http.post<Banner[]>(
      `${this.baseUrl + '/admin/banner/create'}`,
      data
    );
  }
 
//Vendor Name List
MessageList(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl + '/admin/banner/all'}`, data);
}
DeleteMessage(data: any): Observable<Banner[]>{
  return this.http.post<Banner[]>(`${this.baseUrl + '/admin/banner/delete'}`, data);
}
updateMessage(data: any,):Observable<Banner[]>{
  return this.http.post<Banner[]>(`${this.baseUrl + '/admin/banner/edit'}`, data)
}
}
