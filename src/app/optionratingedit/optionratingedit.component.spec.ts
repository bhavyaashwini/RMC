import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionratingeditComponent } from './optionratingedit.component';

describe('OptionratingeditComponent', () => {
  let component: OptionratingeditComponent;
  let fixture: ComponentFixture<OptionratingeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionratingeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionratingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
