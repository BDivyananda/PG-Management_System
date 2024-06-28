import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginserviceService } from '../loginservice.service';
import { SignUpUser } from '../sign-up-user';
import { User } from '../user';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User=new User();
  user2:SignUpUser= new SignUpUser();

  msg=''+this.user2.userName;
  
   

  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:'',
    confirmpassword:''
  };
  loginObj:any={
    email:'',
    password:''
  }
 
  constructor(private loginservice:LoginserviceService,private router:Router, private signupService: SignupService,private router1: Router){}
  

  

  ngOnInit():void{
     const localdata=localStorage.getItem('signUpUser');
     if(localdata!=null){
      this.signupUsers=JSON.parse(localdata);
     }
  }



  loginForm = new FormControl({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[
    Validators.required,
    Validators.minLength(6)
    ]),

  });

  
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUser',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:'',
      email:'',
      password:'',
      confirmpassword:''
    };



    this.router.navigate(['/home'])

  }
  

  onLogin(){

   const isUserExists = this.signupUsers.find(m=>m.email== this.loginObj.email && m.password==this.loginObj.password );

   
   console.log(this.user);
   this.loginservice.loginUser(this.user).subscribe(date=>
   {
     window.alert("user login is successful")
   },
   error=>window.alert("user login is not successful"));
   

   if(isUserExists != undefined){

    alert('user login success');
    this.router.navigate(['/home'])
   }

   else{
    alert('invalid input');
    this.router.navigate(['/login'])
   }

  }

  // loginRegister(){

  //   console.log(this.user);
  //   this.loginservice.loginUser(this.user).subscribe(date=>
  //   {
  //     window.alert("welcome "+this.user2.userName)
  //   },
  //   error=>window.alert("user login is successful"));
  // }

  // signupRegister(){

  //   console.log(this.user2);
  //   this.loginservice.signup(this.user2).subscribe(date=>
  //   {
  //     window.alert("Welcome !! "  + this.user2.userName)
  //   },
  //   error=>window.alert("signup is not successful"));
  // }

}

