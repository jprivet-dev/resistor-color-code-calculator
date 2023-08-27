import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() resistanceMax!: number | null;
  @Input() resistanceMin!: number | null;
  @Input() tolerance!: number | null;

  @Input() i!: number;
  @Output() iChange = new EventEmitter<number>();

  @Input() u!: number;
  @Output() uChange = new EventEmitter<number>();

  updateI($event: any): void {
    if ($event.target.value) {
      this.iChange.emit($event.target.value);
    }
  }

  calculateU(resistance: number): number {
    return calculateVolts(this.i, resistance) ?? 0;
  }

  updateU($event: any): void {
    if ($event.target.value) {
      this.uChange.emit($event.target.value);
    }
  }

  calculateI(resistance: number): number {
    return calculateAmps(this.u, resistance) ?? 0;
  }
}
