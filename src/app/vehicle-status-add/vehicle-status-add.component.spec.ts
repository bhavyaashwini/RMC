import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStatusAddComponent } from './vehicle-status-add.component';

describe('VehicleStatusAddComponent', () => {
  let component: VehicleStatusAddComponent;
  let fixture: ComponentFixture<VehicleStatusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleStatusAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleStatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
