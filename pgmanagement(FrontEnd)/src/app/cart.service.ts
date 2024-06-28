import { Injectable } from '@angular/core';
import { Cart } from './shared/models/Cart';
import { Books } from './shared/book';
import { CartItem } from './shared/models/cartItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  addToCart(book: Books): void {
    try {
      const cartItem = this.cart.items.find(item => item.book.id === book.id);
      if (!cartItem) {
        this.cart.items.push(new CartItem(book));
        this.setCartToLocalStorage();
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }

  removeFromCart(bookId: string): void {
    try {
      this.cart.items = this.cart.items.filter(item => item.book.id !== bookId);
      this.setCartToLocalStorage();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  }

  changeQuantity(bookId: string, quantity: number) {
    try {
      const cartItem = this.cart.items.find(item => item.book.id === bookId);
      if (cartItem) {
        const oldQuantity = cartItem.quantity;
        cartItem.quantity = quantity;
        cartItem.price = (quantity * cartItem.book.price) + ((quantity - oldQuantity) * cartItem.book.price);
        this.setCartToLocalStorage();
      }
    } catch (error) {
      console.error('Error changing quantity:', error);
    }
  }

  clearCart() {
    try {
      this.cart = new Cart();
      this.setCartToLocalStorage();
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    try {
      this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
      this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

      const cartJson = JSON.stringify(this.cart);
      localStorage.setItem('Cart', cartJson);
      this.cartSubject.next(this.cart);
    } catch (error) {
      console.error('Error setting cart to local storage:', error);
    }
  }

  constructor() {
    this.initializeCartFromLocalStorage();
  }

  private initializeCartFromLocalStorage(): void {
    try {
      const cartJson = localStorage.getItem('Cart');
      if (cartJson) {
        this.cart = JSON.parse(cartJson);
        this.cartSubject.next(this.cart);
      }
    } catch (error) {
      console.error('Error initializing cart from local storage:', error);
    }
  }
}
