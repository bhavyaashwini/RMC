import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Statusvehicle } from '../models/statusvehicle';
@Injectable({
  providedIn: 'root'
})
export class StatusvehicleService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
 starCreate(data:any): Observable<Statusvehicle[]> {
    return this.http.post<Statusvehicle[]>(
      `${this.baseUrl + '/admin/vehicle_status/create'}`,
      data
    );
  }
 
//Vendor Name List
starList(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl + '/admin/vehicle_status/all'}`, data);
}
starDelete(data: any): Observable<Statusvehicle[]>{
  return this.http.put<Statusvehicle[]>(`${this.baseUrl + '/admin/vehicle_status/delete'}`, data);
}
starUpdate(data: any):Observable<Statusvehicle[]>{
  return this.http.put<Statusvehicle[]>(`${this.baseUrl + '/admin/vehicle_status/edit'}`, data)
}
}
