import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserroleeditComponent } from './userroleedit.component';

describe('UserroleeditComponent', () => {
  let component: UserroleeditComponent;
  let fixture: ComponentFixture<UserroleeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserroleeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserroleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
