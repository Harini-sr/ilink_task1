import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentGridComponent } from './components/student-grid/student-grid.component';
import { StudentBooksComponent } from './components/student-books/student-books.component';
import { BookOrderComponent } from './components/book-order/book-order.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  { path: 'students', component: StudentGridComponent },
  { path: 'books', component: StudentBooksComponent },
  { path: 'book-order', component: BookOrderComponent },
  { path: 'book-list', component: BookListComponent },

  { path: '', redirectTo: '/students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
