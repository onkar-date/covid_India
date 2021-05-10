import { TestBed } from '@angular/core/testing';

import { CovinServiceService } from './covin-service.service';

describe('CovinServiceService', () => {
  let service: CovinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
