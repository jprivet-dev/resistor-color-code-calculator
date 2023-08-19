import { Decode } from './resistor.model';
import { Resistor } from './resistor.model';
import { BandName } from './resistor.model';
import { resistorConfig } from './resistor.model';
import { BandColor } from './resistor.model';

export function decodeResistor(decode: Decode, resistor: Resistor): Decode {
  return {
    digit1: {
      color: color(resistor, 'digit1'),
      value: value(resistor, 'digit1'),
    },
    digit2: {
      color: color(resistor, 'digit2'),
      value: value(resistor, 'digit2'),
    },
    digit3: {
      color: color(resistor, 'digit3'),
      value: value(resistor, 'digit3'),
      active: resistor.bandsCount >= 5,
    },
    multiplier: {
      color: color(resistor, 'multiplier'),
      value: value(resistor, 'multiplier'),
    },
    tolerance: {
      color: color(resistor, 'tolerance'),
      value: value(resistor, 'tolerance'),
      lastColorWithoutNone: resistor.tolerance.color,
      active: resistor.bandsCount >= 4,
    },
    thermalCoefficient: {
      color: color(resistor, 'thermalCoefficient'),
      value: value(resistor, 'thermalCoefficient'),
      active: resistor.bandsCount === 6,
    },
    bandsCount: resistor.bandsCount,
  };
}

function color(resistor: Resistor, bandName: BandName): BandColor {
  return resistor[bandName].color;
}

function value(resistor: Resistor, bandName: BandName): number | null {
  return resistorConfig[bandName][resistor[bandName].color];
}
