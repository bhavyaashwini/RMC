import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclecategoryeditComponent } from './vehiclecategoryedit.component';

describe('VehiclecategoryeditComponent', () => {
  let component: VehiclecategoryeditComponent;
  let fixture: ComponentFixture<VehiclecategoryeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclecategoryeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclecategoryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
