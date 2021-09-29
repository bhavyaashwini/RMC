import { TestBed } from '@angular/core/testing';

import { VehiclestatusService } from './vehiclestatus.service';

describe('VehiclestatusService', () => {
  let service: VehiclestatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclestatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
