import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

import { Vehiclestatus } from '../models/vehiclestatus';

@Injectable({
  providedIn: 'root'
})
export class VehiclestatusService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
  cancelCreate(data:any): Observable<Vehiclestatus[]> {
    return this.http.post<Vehiclestatus[]>(
      `${this.baseUrl + '/admin/vehicle_category/create'}`,
      data
    );
  }
 
//Vendor Name List
cancelList(data: any): Observable<Vehiclestatus[]> {
  return this.http.post<Vehiclestatus[]>(`${this.baseUrl + '/admin/vehicle_category/all'}`, data);
}
cancelDelete(data: any): Observable<Vehiclestatus[]>{
  return this.http.put<Vehiclestatus[]>(`${this.baseUrl + '/admin/vehicle_category/delete'}`, data);
}
cancelUpdate(data: any):Observable<Vehiclestatus[]>{
  return this.http.put<Vehiclestatus[]>(`${this.baseUrl + '/admin/vehicle_category/edit'}`, data)
}
}
