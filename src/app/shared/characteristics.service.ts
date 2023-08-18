import { Injectable } from '@angular/core';
import { Resistor } from '../resistor/resistor.model';
import { resistorConfig } from '../resistor/resistor.model';
import { Characteristics } from '../resistor/resistor.model';

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

  calculateTolerance(resistor: Readonly<Resistor>): number {
    return this.resistorConfig.tolerance[resistor.tolerance.color] ?? 0;
  }

  calculateAll(resistor: Readonly<Resistor>): Characteristics {
    return {
      resistance: this.calculateResistance(resistor),
      tolerance: this.calculateTolerance(resistor),
    };
  }
}
