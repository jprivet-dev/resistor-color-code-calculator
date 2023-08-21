import { Injectable } from '@angular/core';
import { Characteristics } from './resistor.model';
import { Decode } from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class CharacteristicsService {
  calculateResistance(decode: Readonly<Decode>): number {
    const digit1: number = decode.digit1.value ?? 0;
    const digit2: number = decode.digit2.value ?? 0;
    const digit3: number = decode.digit3.value ?? 0;
    const multiplier: number = decode.multiplier.value ?? 0;

    return decode.bandsCount <= 4
      ? (digit1 * 10 + digit2) * multiplier
      : (digit1 * 100 + digit2 * 10 + digit3) * multiplier;
  }

  calculateResistanceMax(resistance: number, tolerance: number): number {
    return (resistance / 100) * (100 + tolerance);
  }

  calculateResistanceMin(resistance: number, tolerance: number): number {
    return (resistance / 100) * (100 - tolerance);
  }

  calculateToleranceOhm(resistance: number, tolerance: number): number {
    return (tolerance / 100) * resistance;
  }

  calculateAll(decode: Readonly<Decode>): Characteristics {
    const resistance: number = this.calculateResistance(decode);
    const tolerance: number = decode.tolerance.value ?? 0;

    return {
      resistance,
      resistanceMax: this.calculateResistanceMax(resistance, tolerance),
      resistanceMin: this.calculateResistanceMin(resistance, tolerance),
      tolerance,
      toleranceOhm: this.calculateToleranceOhm(resistance, tolerance),
      thermalCoefficient: decode.thermalCoefficient.value ?? 0,
    };
  }
}
