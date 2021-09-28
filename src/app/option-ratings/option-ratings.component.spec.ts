import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRatingsComponent } from './option-ratings.component';

describe('OptionRatingsComponent', () => {
  let component: OptionRatingsComponent;
  let fixture: ComponentFixture<OptionRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
