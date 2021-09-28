import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingsAddComponent } from './star-ratings-add.component';

describe('StarRatingsAddComponent', () => {
  let component: StarRatingsAddComponent;
  let fixture: ComponentFixture<StarRatingsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
