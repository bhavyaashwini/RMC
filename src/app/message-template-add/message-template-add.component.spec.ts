import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTemplateAddComponent } from './message-template-add.component';

describe('MessageTemplateAddComponent', () => {
  let component: MessageTemplateAddComponent;
  let fixture: ComponentFixture<MessageTemplateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageTemplateAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTemplateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
