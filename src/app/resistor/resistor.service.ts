import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resistor } from './resistor.model';
import { bandsColors } from './resistor.model';
import { resistorConfig } from './resistor.model';
import { ResistorStorage } from './resistor.storage';

@Injectable({
  providedIn: 'root',
})
export class ResistorService {
  private storage = inject(ResistorStorage);
  readonly bandsCounts = [3, 4, 5, 6];
  readonly bandsColors = bandsColors;
  readonly resistorConfig = resistorConfig;

  retrieveResistor(): Observable<Resistor> {
    const resistor = this.storage.getResistor();
    return resistor
      ? of(resistor)
      : of({
          digit1: { color: 'brown' },
          digit2: { color: 'green' },
          digit3: { color: 'red' },
          multiplier: { color: 'black' },
          tolerance: { color: 'violet' },
          thermalCoefficient: { color: 'red' },
          bandsCount: 4,
        });
  }
}
