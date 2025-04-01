import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { addform } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-order',
  standalone: false,
  templateUrl: './book-order.component.html',
  styleUrl: './book-order.component.css'
})
export class BookOrderComponent {
  userForm!: FormGroup;
  viewall: any;

  constructor(private bookService: BookService) {}

  bookList = [
    'Math - Class 6',
    'Science - Class 7',
    'History - Class 8',
    'Geography - Class 9',
    'Physics - Class 10',
    'Chemistry - Class 11',
    'Biology - Class 12',
    'English - Class 6',
    'Tamil - Class 10',
    'Computer Science - Class 12'
  ];

  ngOnInit() {
   /*  this.bookService.getAll().subscribe((res: any) => {
      this.viewall = res;
    }); */

    this.userForm = new FormGroup(
      {
        name: new FormControl("", [
          Validators.required,
          Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/)
        ]),
        class: new FormControl("", [
          Validators.required,
        ]),
        bookName: new FormControl("", [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9\s-]+$/)
        ]),
        startDate: new FormControl("", Validators.required),
        endDate: new FormControl("", Validators.required)
      },
      { validators: this.dateRangeValidator }
    );
  }

  dateRangeValidator(control: AbstractControl) {
    const startDate = control.get('startDate')?.value;
    const endDate = control.get('endDate')?.value;

    return startDate && endDate && new Date(startDate) > new Date(endDate)
      ? { invalidDateRange: true }
      : null;
  }

  get name() {
    return this.userForm.get('name');
  }

  get class() {
    return this.userForm.get('class');
  }

  get bookName() {
    return this.userForm.get('bookName');
  }

  get startDate() {
    return this.userForm.get('startDate');
  }

  get endDate() {
    return this.userForm.get('endDate');
  }

  onSubmit() {
    if (this.userForm.valid) {
      let submitModel: addform = {
        name: this.name?.value,
        class: this.class?.value,
        bookName: this.bookName?.value,
        startDate: this.startDate?.value,
        endDate: this.endDate?.value
      };

      this.bookService.addform(submitModel).subscribe((res: any) => {
        this.viewall = res.response;
        console.log('Form submitted successfully:', res);
      });

      this.userForm.reset();
    } else {
      console.log('Form is invalid.');
    }
  }

  reset() {
    this.userForm.reset();
  }
}
