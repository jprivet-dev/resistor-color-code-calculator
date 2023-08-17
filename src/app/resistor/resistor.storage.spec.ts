import { TestBed } from '@angular/core/testing';

import { ResistorStorage } from './resistor.storage';

describe('ResistorStorage', () => {
  let service: ResistorStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResistorStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
