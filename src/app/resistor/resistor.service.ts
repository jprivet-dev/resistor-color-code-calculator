import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resistor } from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class ResistorService {
  getResistor(): Observable<Resistor> {
    return of({
      bandDigit1: { color: 'red' },
      bandDigit2: { color: 'red' },
      bandDigit3: { color: 'red' },
      bandMultiplier: { color: 'red' },
      bandTolerance: { color: 'red' },
      bandThermalCoefficient: { color: 'red' },
    });
  }
}
