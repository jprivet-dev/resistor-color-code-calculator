import { TestBed } from '@angular/core/testing';

import { ResistorFacade } from './resistor.facade';

describe('ResistorFacade', () => {
  let service: ResistorFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResistorFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
