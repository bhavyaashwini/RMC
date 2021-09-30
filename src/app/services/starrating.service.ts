import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import {Starrating} from '../models/starrating';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StarratingService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
 starCreate(data:any): Observable<Starrating[]> {
    return this.http.post<Starrating[]>(
      `${this.baseUrl + '/admin/star_rating/create'}`,
      data
    );
  }
 
//Vendor Name List
starList(data: any): Observable<Starrating[]> {
  return this.http.post<Starrating[]>(`${this.baseUrl + '/admin/star_rating/all'}`, data);
}
starDelete(data: any): Observable<Starrating[]>{
  return this.http.post<Starrating[]>(`${this.baseUrl + '/admin/star_rating/delete'}`, data);
}
starUpdate(data: any):Observable<Starrating[]>{
  return this.http.post<Starrating[]>(`${this.baseUrl + '/admin/star_rating/edit'}`, data)
}
}
