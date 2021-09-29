import { TestBed } from '@angular/core/testing';

import { MessagetemplateService } from './messagetemplate.service';

describe('MessagetemplateService', () => {
  let service: MessagetemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagetemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
