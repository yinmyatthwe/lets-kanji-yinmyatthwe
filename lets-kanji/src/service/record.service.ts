import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  apiUrl="http://localhost:1337/api/record-lists";
  
  constructor(private http:HttpClient) { }
  getRecordList(): Observable<any[]> {
    return this.http.get<{ data: any[] }>(this.apiUrl).pipe(
      map(response => response.data) 
    );
  }
  saveResult(score: number, user_id: any, test_id: any,level:any): Observable<any> {
    const result = {data:{ score, user_id, test_id,level }};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    console.log(result);
    return this.http.post<any>(this.apiUrl, result, { headers });
  }
}
