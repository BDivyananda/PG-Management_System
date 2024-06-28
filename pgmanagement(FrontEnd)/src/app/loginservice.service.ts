import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { SignUpUser } from './sign-up-user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  baseUrl="http://localhost:8080/user";
  baseUrl2="http://localhost:8080/user2";
  constructor(private httpClient:HttpClient) { }

    loginUser(user:User):Observable<object>{
          console.log(user);
          return this.httpClient.post(`${this.baseUrl}`,user);        
    }
    
    signup(user2:SignUpUser):Observable<object>{
      console.log(user2);
      return this.httpClient.post(`${this.baseUrl2}`,user2);        
}

}
