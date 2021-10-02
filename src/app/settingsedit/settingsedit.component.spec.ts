import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingseditComponent } from './settingsedit.component';

describe('SettingseditComponent', () => {
  let component: SettingseditComponent;
  let fixture: ComponentFixture<SettingseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
