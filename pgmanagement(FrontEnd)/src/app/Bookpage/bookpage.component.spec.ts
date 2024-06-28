import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpageComponent } from './bookpage.component';

describe('BookpageComponent', () => {
  let component: BookpageComponent;
  let fixture: ComponentFixture<BookpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookpageComponent]
    });
    fixture = TestBed.createComponent(BookpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
