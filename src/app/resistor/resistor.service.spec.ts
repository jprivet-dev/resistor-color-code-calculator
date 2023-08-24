import { TestBed } from '@angular/core/testing';

import { ResistorService } from './resistor.service';

describe('ResistorService', () => {
  let service: ResistorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResistorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
