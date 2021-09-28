import { Injectable } from '@angular/core';
import { Student } from '../student.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiUrl = 'http://localhost:8000/api';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  // UpdateStudent(id: string | null, value: any) {
  //   throw new Error('Method not implemented.');
  // }

  // endpoint: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
  AddStudent(data: any): Observable<any> {
    return this.http.post<Student[]>(`${apiUrl}/add-student`, data);
  }
  
  // Get all students
 public GetStudents() : Observable<Student[]> {
    return this.http.get<Student[]>(`${apiUrl}`);
  }

  
  
  GetStud(id:any):Observable<Student[]>{
    console.log(`${apiUrl}/read-student/${id}`, "get");
    return this.http.get<Student[]>(`${apiUrl}/read-student/${id}`);
  }


  updateStudent(id: any, data: any):Observable<Student[]>{
    return this.http.put<Student[]>(`${apiUrl}/update-student/${id}`, data);
  }

 
DeleteStudent(id: any): Observable<Student[]>{
  return this.http.delete<Student[]>(`${apiUrl}/delete-student/${id}`);
}
  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}