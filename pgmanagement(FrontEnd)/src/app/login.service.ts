import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){}

  baseUrl="http://localhost:8080/user";
  login(){
  return this.http.get(this.baseUrl);

}
}
