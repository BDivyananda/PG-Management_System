import { Component } from '@angular/core';
import { CartItem } from '../shared/models/cartItem';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { Cart } from '../shared/models/Cart';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var Razorpay:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  orderForm!: FormGroup;
  cart!: Cart;
  totalPrice: number = 0;
  private cartSubscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private _route: Router
  ) {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cart = cart;
      this.totalPrice = this.cart.totalPrice || 0;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

 
  payNow(){
    const RazorpayOptions ={
      description :' Sample Razorpay',
      currency:'INR',
      amount:this.totalPrice*100,
      name:'BookStore',
      key:'rzp_test_n7B3WeMFtEXUqs',
      images:'https://i.imgur.com/FApqk3D/jpeg',
      prefill:{
        // name:'SUNIL RAM',
        // email:'sunil06ram@gmail.com',
        phone:'6352417845'
      },
      theme:{
        color:'pink'
      },
      modal:{
        ondismiss:() =>{
          console.log('dismissed')
        }
      }
    }

    const successCallback =(paymentid:any) =>{
      console.log(paymentid);
      
    }
    const failureCallback = (e:any) =>{
      console.log(e);
    }
    Razorpay.open(RazorpayOptions,successCallback,failureCallback) 
  }

  proceedToPayment(): void {
    if (this.orderForm.valid) {
      this.payNow();
      this.cartService.clearCart();
      this._route.navigate(['/addbook']);
    } else {
      this.markFormGroupTouched(this.orderForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

 
}
