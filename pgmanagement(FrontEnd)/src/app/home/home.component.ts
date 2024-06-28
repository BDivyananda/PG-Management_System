import { Component, OnInit } from '@angular/core';
import {  StoreService } from '../store.service';
import { Books } from '../shared/book';
//import {StarRatingComponent} from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:Books[]=[];
  constructor(private bs:StoreService,private router:ActivatedRoute){}
  
  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      this.books = this.bs.getAll().filter(book => book.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.books=this.bs.getAllBookByTag(params['tag'])
      else
      this.books = this.bs.getAll(); //done
    })
    
    
  }
  

}
