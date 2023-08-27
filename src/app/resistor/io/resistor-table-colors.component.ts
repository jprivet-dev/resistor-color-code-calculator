import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BandColor, Decode, ResistorConfig } from '../resistor.model';

@Component({
  selector: 'app-resistor-table-colors',
  templateUrl: './resistor-table-colors.component.html',
  styleUrls: ['./resistor-table-colors.component.scss'],
})
export class ResistorTableColorsComponent {
  @Input() decode!: Readonly<Decode>;
  @Input() bandsColors!: BandColor[];
  @Input() resistorConfig!: ResistorConfig;

  @Output() digit1Event = new EventEmitter<BandColor>();
  @Output() digit2Event = new EventEmitter<BandColor>();
  @Output() digit3Event = new EventEmitter<BandColor>();
  @Output() multiplierEvent = new EventEmitter<BandColor>();
  @Output() toleranceEvent = new EventEmitter<BandColor>();
  @Output() thermalCoefficientEvent = new EventEmitter<BandColor>();

  updateDigit1(color: BandColor): void {
    this.digit1Event.emit(color);
  }

  updateDigit2(color: BandColor): void {
    this.digit2Event.emit(color);
  }

  updateDigit3(color: BandColor): void {
    this.digit3Event.emit(color);
  }

  updateMultiplier(color: BandColor): void {
    this.multiplierEvent.emit(color);
  }

  updateTolerance(color: BandColor): void {
    this.toleranceEvent.emit(color);
  }

  updateThermalCoefficient(color: BandColor): void {
    this.thermalCoefficientEvent.emit(color);
  }

  toleranceColorIsDisabled(decode: Decode, color: BandColor): string | null {
    if (decode.tolerance.forceToleranceToTwentyPercent) {
      return color === 'none' ? null : '';
    }
    return color === 'none' ? '' : null;
  }
}
