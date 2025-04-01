import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentGridComponent } from './components/student-grid/student-grid.component';
import { StudentBooksComponent } from './components/student-books/student-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { IStudentService } from './models/abstract';
import { HttpClientModule } from '@angular/common/http';
import { BookOrderComponent } from './components/book-order/book-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentGridComponent,
    StudentBooksComponent,
    BookOrderComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatTableModule,
    MatButtonModule 
  ],
  providers: [{ provide: IStudentService, useClass: StudentService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
