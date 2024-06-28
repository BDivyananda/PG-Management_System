import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{

  @Input() visible:boolean = false;
  @Input() notFoundMessage:string = 'Nothing Found!';
  @Input() resetLinkText:string = 'Go to HomePage';
  @Input() resetLinkRoute:string = '/home';

  constructor(){ }

  ngOnInit(): void {
    
  }
}
