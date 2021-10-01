import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Cancelbooking } from '../models/cancelbooking';

@Injectable({
  providedIn: 'root'
})
export class CancelbookingService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
  cancelCreate(data:any): Observable<Cancelbooking[]> {
    return this.http.post<Cancelbooking[]>(
      `${this.baseUrl + '/admin/cancel_booking/create'}`,
      data
    );
  }
 
//Vendor Name List
cancelList(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl + '/admin/cancel_booking/all'}`, data);
}
cancelDelete(data: any): Observable<Cancelbooking[]>{
  return this.http.put<Cancelbooking[]>(`${this.baseUrl + '/admin/cancel_booking/delete'}`, data);
}
cancelUpdate(data: any):Observable<Cancelbooking[]>{
  return this.http.put<Cancelbooking[]>(`${this.baseUrl + '/admin/cancel_booking/edit'}`, data)
}
}
