import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
// import {Vehicelcategory} from '../models/Vehicelcategory';
import { Vehicelcategory } from '../models/vehicelcategory';

@Injectable({
  providedIn: 'root'
})
export class VehiclecategoryService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
  cancelCreate(data:any): Observable<Vehicelcategory[]> {
    return this.http.post<Vehicelcategory[]>(
      `${this.baseUrl + '/admin/vehicle_category/create'}`,
      data
    );
  }
 
//Vendor Name List
cancelList(data: any): Observable<Vehicelcategory[]> {
  return this.http.post<Vehicelcategory[]>(`${this.baseUrl + '/admin/vehicle_category/all'}`, data);
}
cancelDelete(data: any): Observable<Vehicelcategory[]>{
  return this.http.put<Vehicelcategory[]>(`${this.baseUrl + '/admin/vehicle_category/delete'}`, data);
}
cancelUpdate(data: any):Observable<Vehicelcategory[]>{
  return this.http.put<Vehicelcategory[]>(`${this.baseUrl + '/admin/vehicle_category/edit'}`, data)
}
}
