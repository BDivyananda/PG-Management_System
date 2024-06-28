import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    // Inject the user service
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  } 
  login(){
       this.http.get<any>("http://localhost:8080/user")
        
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        alert("Login Successfully !!!");
        this.loginForm.reset();
        this.router.navigate(['/home']);
      } else{
        alert(" user not found");
      }
    },err=>{
      // alert("Something went wrong");
       this.loginForm.reset();
       this.router.navigate(['/home']);
      
    })

    
  }
}
  

/* baseUrl="http://localhost:8080/user";
  router: any;
  
  constructor(private httpClient:HttpClient) { }
  userRegister(user:User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${(this.baseUrl)}`,user);
  }*/