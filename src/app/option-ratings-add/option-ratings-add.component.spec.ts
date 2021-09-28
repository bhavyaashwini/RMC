import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRatingsAddComponent } from './option-ratings-add.component';

describe('OptionRatingsAddComponent', () => {
  let component: OptionRatingsAddComponent;
  let fixture: ComponentFixture<OptionRatingsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionRatingsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionRatingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
