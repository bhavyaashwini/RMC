import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsaddComponent } from './settingsadd.component';

describe('SettingsaddComponent', () => {
  let component: SettingsaddComponent;
  let fixture: ComponentFixture<SettingsaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
