import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class MyDataServiceService {
  uri = 'http://localhost:4000/employees';
  
  constructor(private http: HttpClient) { }
  // To Get The List Of Employee
 getEmployees() {
 return this.http.get(`${this.uri}`);
 }

 // To Get Employee Details For Single Record Using Id
 getEmployeeById(empid: any) {
 return this.http.get(`${this.uri}/editEmployee/${empid}`);
 }

 // To Updated Specific Employee
 updateEmployee(id: any, body: any) {
 return this.http.post(`${this.uri}/updateEmployee/${id}`, body);
 }

 // To Create/Add New Employee
 addEmployee(body: any) {
 return this.http.post(`${this.uri}/addEmployee`, body);
 }

 // To Delete Any Employee
 deleteEmployee(empid: any) {
 return this.http.get(`${this.uri}/deleteEmployee/${empid}`);
 }
}
