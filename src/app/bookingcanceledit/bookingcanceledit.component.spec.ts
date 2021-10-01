import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcanceleditComponent } from './bookingcanceledit.component';

describe('BookingcanceleditComponent', () => {
  let component: BookingcanceleditComponent;
  let fixture: ComponentFixture<BookingcanceleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingcanceleditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingcanceleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
