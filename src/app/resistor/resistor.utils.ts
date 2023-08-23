import {
  BandColor,
  BandName,
  bandsColors,
  Decode,
  Resistor,
  resistorConfig,
  SeriesE12Item,
  SeriesE12Subset,
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

export function generateSeriesE12(): SeriesE12Item[] {
  const seriesE12Subsets: SeriesE12Subset[] = [
    { value: 1.0, digit1Color: 'brown', digit2Color: 'black' },
    { value: 1.2, digit1Color: 'brown', digit2Color: 'red' },
    { value: 1.5, digit1Color: 'brown', digit2Color: 'green' },
    { value: 1.8, digit1Color: 'brown', digit2Color: 'grey' },
    { value: 2.2, digit1Color: 'red', digit2Color: 'red' },
    { value: 2.7, digit1Color: 'red', digit2Color: 'violet' },
    { value: 3.3, digit1Color: 'orange', digit2Color: 'orange' },
    { value: 3.9, digit1Color: 'orange', digit2Color: 'white' },
    { value: 4.7, digit1Color: 'yellow', digit2Color: 'violet' },
    { value: 5.6, digit1Color: 'green', digit2Color: 'blue' },
    { value: 6.8, digit1Color: 'blue', digit2Color: 'grey' },
    { value: 8.2, digit1Color: 'grey', digit2Color: 'red' },
  ];

  const series: SeriesE12Item[] = [];

  for (let decade = 1; decade <= 6; decade++) {
    seriesE12Subsets.forEach((subset) => {
      series.push({
        value: subset.value * Math.pow(10, decade),
        digit1Color: subset.digit1Color,
        digit2Color: subset.digit2Color,
        multiplierColor: bandsColors[decade],
        toleranceColor: 'gold',
        bandsCount: 4,
      });
    });
  }

  const decade = 7;
  const subset = seriesE12Subsets[0];
  series.push({
    value: subset.value * Math.pow(10, decade),
    digit1Color: subset.digit1Color,
    digit2Color: subset.digit2Color,
    multiplierColor: bandsColors[decade],
    toleranceColor: 'gold',
    bandsCount: 4,
  });

  return series;
}
