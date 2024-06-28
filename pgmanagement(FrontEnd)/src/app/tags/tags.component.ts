import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  bookPageTags?:string[];
  @Input()
  justifyContent?:string = 'center';

    tags?:Tag[] =[];
  constructor(private bs:StoreService){}

  ngOnInit(): void {
    if(!this.bookPageTags)
    this.tags = this.bs.getAllTag();
  }
 
}
