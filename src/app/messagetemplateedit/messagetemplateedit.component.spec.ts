import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagetemplateeditComponent } from './messagetemplateedit.component';

describe('MessagetemplateeditComponent', () => {
  let component: MessagetemplateeditComponent;
  let fixture: ComponentFixture<MessagetemplateeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagetemplateeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagetemplateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
