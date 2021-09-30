import { TestBed } from '@angular/core/testing';

import { OptionbyratingsService } from './optionbyratings.service';

describe('OptionbyratingsService', () => {
  let service: OptionbyratingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionbyratingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
