import { TestBed } from '@angular/core/testing';

import { CovinService } from './covin.service';

describe('CovinService', () => {
  let service: CovinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
