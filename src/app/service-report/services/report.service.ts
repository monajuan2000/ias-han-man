import { Report } from './../../shared/models/ReportModel';
import { Technical } from './../../shared/models/TechniciansModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService{
   path = '/technical/find-all'
   technical:Technical
   report:Report

  constructor(public http: HttpClient) {
    this.technical = new Technical();
    this.report = new Report();
   }
   create(dto:any){
    return this.http.post<Technical>(`${environment.apiUrl}${this.path}`, dto)
   }
   list(){
     return this.http.post<Array<Technical>>(`${environment.apiUrl}${this.path}`,{message:'hellow'})
   }
   findById(dto:any){
    return this.http.post<Technical>(`${environment.apiUrl}${this.path}`, dto)
   }
   update(dto: any) {
    return this.http.put<Technical>(`${environment.apiUrl}${this.path}`, dto);
  }
}
