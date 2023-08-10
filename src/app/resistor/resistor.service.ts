import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resistor } from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class ResistorService {
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
