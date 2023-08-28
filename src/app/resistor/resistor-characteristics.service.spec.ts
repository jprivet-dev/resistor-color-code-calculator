import { TestBed } from '@angular/core/testing';

import { ResistorCharacteristicsService } from './resistor-characteristics.service';

describe('ResistorCharacteristicsService', () => {
  let service: ResistorCharacteristicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResistorCharacteristicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
