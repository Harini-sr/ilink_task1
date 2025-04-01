import { Injectable } from '@angular/core';
import { IStudent } from '../models/student';
import { IStudentService } from '../models/abstract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { addform } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends IStudentService  {

 private basepath : string = "http://localhost:3500/students";
 
 constructor(private http: HttpClient) { 
  super(); 
}

getStudents(): Observable<IStudent[]> {
  return this.http.get<IStudent[]>(this.basepath);
}

  
}
