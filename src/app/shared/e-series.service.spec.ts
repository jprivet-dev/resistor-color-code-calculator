import { TestBed } from '@angular/core/testing';

import { ESeriesService } from './e-series.service';

describe('ESeriesService', () => {
  let service: ESeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ESeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
