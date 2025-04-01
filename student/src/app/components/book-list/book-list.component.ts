import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: IBook[] = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getStudentBooks();
  }

}
