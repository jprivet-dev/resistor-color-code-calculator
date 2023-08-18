import { Injectable } from '@angular/core';
import { Resistor } from './resistor.model';
import { resistorConfig } from './resistor.model';
import { Characteristics } from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class CharacteristicsService {
  private resistorConfig = resistorConfig;

  calculateResistance(resistor: Readonly<Resistor>): number {
    const digit1Color = resistor.digit1.color;
    const digit1: number = this.resistorConfig.digit1[digit1Color] ?? 0;

    const digit2Color = resistor.digit2.color;
    const digit2: number = this.resistorConfig.digit2[digit2Color] ?? 0;

    const digit3Color = resistor.digit3.color;
    const digit3: number = this.resistorConfig.digit3[digit3Color] ?? 0;

    const multiplierColor = resistor.multiplier.color;
    const multiplier: number =
      this.resistorConfig.multiplier[multiplierColor] ?? 0;

    return resistor.bandsCount <= 4
      ? (digit1 * 10 + digit2) * multiplier
      : (digit1 * 100 + digit2 * 10 + digit3) * multiplier;
  }

  calculateResistanceMax(resistance: number, tolerance: number): number {
    return (resistance / 100) * (100 + tolerance);
  }

  calculateResistanceMin(resistance: number, tolerance: number): number {
    return (resistance / 100) * (100 - tolerance);
  }

  calculateTolerance(resistor: Readonly<Resistor>): number {
    return this.resistorConfig.tolerance[resistor.tolerance.color] ?? 0;
  }

  calculateToleranceOhm(resistance: number, tolerance: number): number {
    return (tolerance / 100) * resistance;
  }

  calculateThermalCoefficient(resistor: Resistor): number {
    const thermalCoefficient =
      this.resistorConfig.thermalCoefficient[
        resistor.thermalCoefficient.color
      ] ?? 0;
    return resistor.bandsCount === 6 ? thermalCoefficient : 0;
  }

  calculateAll(resistor: Readonly<Resistor>): Characteristics {
    const resistance: number = this.calculateResistance(resistor);
    const tolerance: number = this.calculateTolerance(resistor);

    return {
      resistance,
      resistanceMax: this.calculateResistanceMax(resistance, tolerance),
      resistanceMin: this.calculateResistanceMin(resistance, tolerance),
      tolerance,
      toleranceOhm: this.calculateToleranceOhm(resistance, tolerance),
      thermalCoefficient: this.calculateThermalCoefficient(resistor),
    };
  }
}