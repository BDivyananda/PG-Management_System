import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { LoginComponent } from './login/login.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ManagebookComponent } from './managebook/managebook.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'book/:id',component:BookpageComponent},
  {path:'cartpage',component:CartpageComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'managebook',component:ManagebookComponent},
  {path:'registration',component:RegistrationComponent},
  
  {path:'header',component:HeaderComponent},
  {path:'',redirectTo:'/registration',pathMatch:'full'}
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
