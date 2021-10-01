import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Optionbyrating} from '../models/optionbyrating';
@Injectable({
  providedIn: 'root'
})
export class OptionbyratingsService {
  baseUrl?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  //Create message
  createOptionrating(data:any): Observable<Optionbyrating[]> {
    return this.http.post<Optionbyrating[]>(
      `${this.baseUrl + '/admin/options_by_rating/create'}`,
      data
    );
  }
 
//Vendor Name List
OptionratingList(data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl + '/admin/options_by_rating/all'}`, data);
}
OptionratingDelete(data: any): Observable<Optionbyrating[]>{
  return this.http.put<Optionbyrating[]>(`${this.baseUrl + '/admin/options_by_rating/delete'}`, data);
}
OptionratingUpdate(data: any):Observable<Optionbyrating[]>{
  return this.http.put<Optionbyrating[]>(`${this.baseUrl + '/admin/options_by_rating/edit'}`, data)
}
}
