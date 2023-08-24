import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { bandsColors, Resistor, resistorConfig } from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class ResistorService {
  readonly bandsCounts = [3, 4, 5, 6];
  readonly bandsColors = bandsColors;
  readonly resistorConfig = resistorConfig;

  retrieveResistor(): Observable<Resistor> {
    return of({
      digit1: { color: 'brown' },
      digit2: { color: 'black' },
      digit3: { color: 'red' },
      multiplier: { color: 'orange' },
      tolerance: { color: 'gold' },
      thermalCoefficient: { color: 'red' },
      bandsCount: 4,
    });
  }
}
