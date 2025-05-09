import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOrderComponent } from './book-order.component';

describe('BookOrderComponent', () => {
  let component: BookOrderComponent;
  let fixture: ComponentFixture<BookOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
