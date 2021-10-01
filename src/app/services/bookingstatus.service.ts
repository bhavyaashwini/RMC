import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import {Bookingstatus} from '../models/bookingstatus';

@Injectable({
  providedIn: 'root'
})
export class BookingstatusService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
  cancelCreate(data:any): Observable<Bookingstatus[]> {
    return this.http.post<Bookingstatus[]>(
      `${this.baseUrl + '/admin/booking_status/create'}`,
      data
    );
  }
 
//Vendor Name List
cancelList(data: any): Observable<Bookingstatus[]> {
  return this.http.post<Bookingstatus[]>(`${this.baseUrl + '/admin/booking_status/all'}`, data);
}
cancelDelete(data: any): Observable<Bookingstatus[]>{
  return this.http.put<Bookingstatus[]>(`${this.baseUrl + '/admin/booking_status/delete'}`, data);
}
cancelUpdate(data: any):Observable<Bookingstatus[]>{
  return this.http.put<Bookingstatus[]>(`${this.baseUrl + '/admin/booking_status/edit'}`, data)
}
}
