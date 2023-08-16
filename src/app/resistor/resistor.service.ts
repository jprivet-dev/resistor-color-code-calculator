import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resistor } from './resistor.model';
import { bandsColors } from './resistor.model';
import { ResistorConfig } from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class ResistorService {
  readonly bandsCounts = [3, 4, 5, 6];
  readonly bandsColors = bandsColors;
  readonly resistorConfig = ResistorConfig;

  getResistor(): Observable<Resistor> {
    return of({
      digit1: { color: 'brown', active: true },
      digit2: { color: 'green', active: true },
      digit3: { color: 'red', active: true },
      multiplier: { color: 'black', active: true },
      tolerance: { color: 'violet', active: false },
      thermalCoefficient: { color: 'red', active: false },
      bandsCount: 4,
    });
  }
}
