import { Component, OnInit } from '@angular/core';
import { Books } from '../shared/book';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit{
book!:Books;
  constructor(private activatedRoute:ActivatedRoute,
    private storeService:StoreService,private cartService:CartService,
    private router:Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.book = storeService.getBookById(params['id'])
      })
    }

  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cartpage');
  }

}
