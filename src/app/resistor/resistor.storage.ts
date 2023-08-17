import { Injectable } from '@angular/core';
import { Resistor } from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class ResistorStorage {
  private RESISTOR = 'resistor';

  getResistor(): Resistor | null {
    const resistor = localStorage.getItem(this.RESISTOR);
    return resistor ? (JSON.parse(resistor) as Resistor) : null;
  }

  setResistor(resistor: Resistor): void {
    localStorage.setItem(this.RESISTOR, JSON.stringify(resistor));
  }
}
