import { TestBed } from '@angular/core/testing';

import { StarratingService } from './starrating.service';

describe('StarratingService', () => {
  let service: StarratingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarratingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
