import { TestBed } from '@angular/core/testing';

import { StatusvehicleService } from './statusvehicle.service';

describe('StatusvehicleService', () => {
  let service: StatusvehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusvehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
