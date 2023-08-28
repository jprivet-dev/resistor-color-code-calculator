import { TestBed } from '@angular/core/testing';

import { ESeriesService } from './e-series.service';
import { k, M } from './math.util';

describe('ESeriesService', () => {
  let service: ESeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ESeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be generate E3 series', () => {
    expect(service.generateValues('E3', 1, 4.7)).toEqual([1, 2.2, 4.7]);
    expect(service.generateValues('E3', 10, 47)).toEqual([10, 22, 47]);
    expect(service.generateValues('E3', 100, 470)).toEqual([100, 220, 470]);
    expect(service.generateValues('E3', 10 * k, 47 * k)).toEqual([
      10 * k,
      22 * k,
      47 * k,
    ]);
    expect(service.generateValues('E3', 10 * M, 47 * M)).toEqual([
      10 * M,
      22 * M,
      47 * M,
    ]);
  });

  it('should be generate E192 series', () => {
    expect(service.generateValues('E192', 1, 1.05)).toEqual([
      1.0, 1.01, 1.02, 1.04, 1.05,
    ]);
    expect(service.generateValues('E192', 10, 10.5)).toEqual([
      10, 10.1, 10.2, 10.4, 10.5,
    ]);
    expect(service.generateValues('E192', 100, 105)).toEqual([
      100, 101, 102, 104, 105,
    ]);

    expect(service.generateValues('E192', 9.42, 9.88)).toEqual([
      9.42, 9.53, 9.65, 9.76, 9.88,
    ]);
    expect(service.generateValues('E192', 94.2, 98.8)).toEqual([
      94.2, 95.3, 96.5, 97.6, 98.8,
    ]);
    expect(service.generateValues('E192', 9.42 * k, 9.88 * k)).toEqual([
      9.42 * k,
      9.53 * k,
      9.65 * k,
      9.76 * k,
      9.88 * k,
    ]);
    expect(service.generateValues('E192', 9.42 * M, 9.88 * M)).toEqual([
      9.42 * M,
      9.53 * M,
      9.65 * M,
      9.76 * M,
      9.88 * M,
    ]);
  });
});
