import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclestatuseditComponent } from './vehiclestatusedit.component';

describe('VehiclestatuseditComponent', () => {
  let component: VehiclestatuseditComponent;
  let fixture: ComponentFixture<VehiclestatuseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclestatuseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclestatuseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
