import { Injectable } from '@angular/core';
import { Bookdetails } from './shared/models/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Bookdetails[] = [];

  getBooks(): Bookdetails[] {
    return this.books;
  }

  addBook(book: Bookdetails): void {
    book.id = this.books.length + 1;
    this.books.push(book);
  }

  updateBook(updatedBook: Bookdetails): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(bookId: number): void {
    this.books = this.books.filter(book => book.id !== bookId);
  }
  constructor() { }
}
