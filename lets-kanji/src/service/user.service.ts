import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:1337/api/auth/local/register'; // register
  private apiLoginUrl = 'http://localhost:1337/api/auth/local'; //login
  constructor(private http: HttpClient) { }

  register(user: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(this.apiLoginUrl, {
      identifier: credentials.email, 
      password: credentials.password
    });
  }

}
