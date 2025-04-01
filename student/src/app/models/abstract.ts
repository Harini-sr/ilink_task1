import { Observable } from "rxjs";
import { IStudent } from "./student";

export abstract class IStudentService {

    abstract getStudents(): Observable<IStudent[]>;
  }
  