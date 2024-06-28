import { Component } from '@angular/core';

@Component({
  selector: 'app-managebook',
  templateUrl: './managebook.component.html',
  styleUrls: ['./managebook.component.css']
})
export class ManagebookComponent {
  books = {
    title: '',
    Owner: '',
    description: '',
    price: 0
  };

}
