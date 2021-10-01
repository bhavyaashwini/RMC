import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarratingeditComponent } from './starratingedit.component';

describe('StarratingeditComponent', () => {
  let component: StarratingeditComponent;
  let fixture: ComponentFixture<StarratingeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarratingeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarratingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
