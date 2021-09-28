import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCancelAddComponent } from './booking-cancel-add.component';

describe('BookingCancelAddComponent', () => {
  let component: BookingCancelAddComponent;
  let fixture: ComponentFixture<BookingCancelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCancelAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCancelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
