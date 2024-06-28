// signup.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = 'http://localhost:8080/user/signup';

  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
