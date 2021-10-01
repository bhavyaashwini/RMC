import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingstatuseditComponent } from './bookingstatusedit.component';

describe('BookingstatuseditComponent', () => {
  let component: BookingstatuseditComponent;
  let fixture: ComponentFixture<BookingstatuseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingstatuseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingstatuseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
