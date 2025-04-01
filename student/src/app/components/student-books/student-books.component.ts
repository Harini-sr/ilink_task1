import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBook } from '../../models/book';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-books',
  standalone: false,
  templateUrl: './student-books.component.html',
  styleUrl: './student-books.component.css'
})
export class StudentBooksComponent {
  books: IBook[] = [];

  dataSource! : MatTableDataSource<any>;
  viewall: any;
  displayedColumns : string[] = [
    'id',
    'name',
    'class',
    'book',
    'startDate',
  'endDate'
 
  
  ];
  id:any;

  constructor(private bookService: BookService) { }

  ngOnInit(){
    this.bookService.viewData().subscribe((res:any) => {
      this.viewall = res;
      this.dataSource = new MatTableDataSource(this.viewall);
      console.log(this.viewall)
    })
  }

}
