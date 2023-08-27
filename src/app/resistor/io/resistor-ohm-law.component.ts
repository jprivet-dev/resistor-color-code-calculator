import { Component, Input } from '@angular/core';
import {
  calculateAmps,
  calculateVolts,
} from '@shared/ohms-law-calculator.util';

@Component({
  selector: 'app-resistor-ohm-law',
  templateUrl: './resistor-ohm-law.component.html',
  styleUrls: ['./resistor-ohm-law.component.scss'],
})
export class ResistorOhmLawComponent {
  @Input() resistance!: number | null;
  i = 0.02;
  u = 5;

  recalculateU(): void {
    this.calculateU(this.resistance ?? 0);
  }

  calculateU(resistance: number): number {
    return calculateVolts(this.i, resistance);
  }

  recalculateI(): void {
    this.calculateI(this.resistance ?? 0);
  }

  calculateI(resistance: number): number {
    return calculateAmps(this.u, resistance);
  }
}
