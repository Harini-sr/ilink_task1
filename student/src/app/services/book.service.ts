import { Injectable } from '@angular/core';
import { IBook } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient){}
  
  private api : string = "http://localhost:3600/book";

  private books: IBook[] = [
    { id: 1, bookName: 'Tamil', studentClass: 'Class 6' },
    { id: 2, bookName: 'English', studentClass: 'Class 7' },
    { id: 3, bookName: 'Maths', studentClass: 'Class 8' },
    { id: 4, bookName: 'Science', studentClass: 'Class 9' },
    { id: 5, bookName: 'Social', studentClass: 'Class 10' },
  ];
  
  
  

  getStudentBooks() {
    return this.books;
  } 

    
/*     getAll(){
      return this.http.get<any>(this.api);
    } */
    addform(submitModel: any){
      return this.http.post<any>(this.api, submitModel);
    }

  viewData(){
    return this.http.get(this.api)
  }

}
