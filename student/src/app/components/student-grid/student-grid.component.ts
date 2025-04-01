import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { IStudent } from '../../models/student';
import { IStudentService } from '../../models/abstract';

@Component({
  selector: 'app-student-grid',
  standalone: false,
  templateUrl: './student-grid.component.html',
  styleUrl: './student-grid.component.css'
})
export class StudentGridComponent {
  students: IStudent[] = [];

  constructor(private studentService: IStudentService) {  }
 ngOnInit(){
    this.studentService.getStudents().subscribe((res: IStudent[]) =>{
      this.students = res;
    })
 }
}
