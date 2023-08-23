import {
  BandColor,
  BandName,
  Decode,
  Resistor,
  resistorConfig,
} from './resistor.model';

export function decodeResistor(decode: Decode, resistor: Resistor): Decode {
  const forceToleranceToTwentyPercent = resistor.bandsCount === 3;
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
      color: forceToleranceToTwentyPercent
        ? 'none'
        : color(resistor, 'tolerance'),
      value: forceToleranceToTwentyPercent
        ? resistorConfig.tolerance.none
        : value(resistor, 'tolerance'),
      active: resistor.bandsCount >= 4,
      forceToleranceToTwentyPercent,
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

export function generateSeriesE12(): number[] {
  const seriesE12Subsets = [
    1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2,
  ];

  const series: number[] = [];
  for (let decade = 0; decade <= 6; decade++) {
    seriesE12Subsets.forEach((subset) => {
      series.push(subset * Math.pow(10, decade));
    });
  }
  series.push(Math.pow(10, 7));
  return series;
}
