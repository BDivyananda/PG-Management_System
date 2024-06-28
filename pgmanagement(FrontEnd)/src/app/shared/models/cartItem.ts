import { Books } from "../book";

export class CartItem{
    constructor(public book:Books){ }
  quantity:number = 1 ;
  price: number = this.book.price;
}