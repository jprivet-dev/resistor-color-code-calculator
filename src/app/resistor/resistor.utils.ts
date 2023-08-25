import {
  BandColor,
  BandName,
  Decode,
  Resistor,
  resistorConfig,
  SeriesE12Item,
  SeriesE12Subset,
  SeriesE24Item,
  SeriesE24Subset,
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
  const multiplierColorByDecade: BandColor[] = [
    'silver',
    'gold',
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
  ];

  const seriesE12Subsets: SeriesE12Subset[] = [
    { value: 1.0, digit1: 'brown', digit2: 'black' },
    { value: 1.2, digit1: 'brown', digit2: 'red' },
    { value: 1.5, digit1: 'brown', digit2: 'green' },
    { value: 1.8, digit1: 'brown', digit2: 'grey' },
    { value: 2.2, digit1: 'red', digit2: 'red' },
    { value: 2.7, digit1: 'red', digit2: 'violet' },
    { value: 3.3, digit1: 'orange', digit2: 'orange' },
    { value: 3.9, digit1: 'orange', digit2: 'white' },
    { value: 4.7, digit1: 'yellow', digit2: 'violet' },
    { value: 5.6, digit1: 'green', digit2: 'blue' },
    { value: 6.8, digit1: 'blue', digit2: 'grey' },
    { value: 8.2, digit1: 'grey', digit2: 'red' },
  ];

  const series: SeriesE12Item[] = [];

  for (let decade = 2; decade <= 7; decade++) {
    seriesE12Subsets.forEach((subset) => {
      series.push({
        value: Math.round(subset.value * Math.pow(10, decade - 1)),
        digit1: subset.digit1,
        digit2: subset.digit2,
        multiplier: multiplierColorByDecade[decade],
        tolerance: 'gold',
        bandsCount: 4,
      });
    });
  }

  const decade = 8;
  const subset = seriesE12Subsets[0];
  series.push({
    value: Math.round(subset.value * Math.pow(10, decade - 1)),
    digit1: subset.digit1,
    digit2: subset.digit2,
    multiplier: multiplierColorByDecade[decade],
    tolerance: 'gold',
    bandsCount: 4,
  });

  return series;
}

export function generateSeriesE24(): SeriesE24Item[] {
  const multiplierColorByDecade: BandColor[] = [
    'silver',
    'gold',
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
  ];

  const seriesE24Subsets: SeriesE24Subset[] = [
    {
      value: 1.0,
      digit1: 'brown',
      digit2: 'black',
      digit3: 'black',
    },
    {
      value: 1.1,
      digit1: 'brown',
      digit2: 'brown',
      digit3: 'black',
    },
    {
      value: 1.2,
      digit1: 'brown',
      digit2: 'red',
      digit3: 'black',
    },
    {
      value: 1.3,
      digit1: 'brown',
      digit2: 'orange',
      digit3: 'black',
    },
    {
      value: 1.5,
      digit1: 'brown',
      digit2: 'green',
      digit3: 'black',
    },
    {
      value: 1.6,
      digit1: 'brown',
      digit2: 'blue',
      digit3: 'black',
    },
    {
      value: 1.8,
      digit1: 'brown',
      digit2: 'grey',
      digit3: 'black',
    },
    {
      value: 2.0,
      digit1: 'red',
      digit2: 'black',
      digit3: 'black',
    },
    {
      value: 2.2,
      digit1: 'red',
      digit2: 'red',
      digit3: 'black',
    },
    {
      value: 2.4,
      digit1: 'red',
      digit2: 'yellow',
      digit3: 'black',
    },
    {
      value: 2.7,
      digit1: 'red',
      digit2: 'violet',
      digit3: 'black',
    },
    {
      value: 3,
      digit1: 'orange',
      digit2: 'black',
      digit3: 'black',
    },
    {
      value: 3.3,
      digit1: 'orange',
      digit2: 'orange',
      digit3: 'black',
    },
    {
      value: 3.6,
      digit1: 'orange',
      digit2: 'blue',
      digit3: 'black',
    },
    {
      value: 3.9,
      digit1: 'orange',
      digit2: 'white',
      digit3: 'black',
    },
    {
      value: 4.3,
      digit1: 'yellow',
      digit2: 'orange',
      digit3: 'black',
    },
    {
      value: 4.7,
      digit1: 'yellow',
      digit2: 'violet',
      digit3: 'black',
    },
    {
      value: 5.1,
      digit1: 'green',
      digit2: 'brown',
      digit3: 'black',
    },
    {
      value: 5.6,
      digit1: 'green',
      digit2: 'blue',
      digit3: 'black',
    },
    {
      value: 6.2,
      digit1: 'blue',
      digit2: 'red',
      digit3: 'black',
    },
    {
      value: 6.8,
      digit1: 'blue',
      digit2: 'grey',
      digit3: 'black',
    },
    {
      value: 7.5,
      digit1: 'violet',
      digit2: 'green',
      digit3: 'black',
    },
    {
      value: 8.2,
      digit1: 'grey',
      digit2: 'red',
      digit3: 'black',
    },
    {
      value: 9.1,
      digit1: 'white',
      digit2: 'brown',
      digit3: 'black',
    },
  ];

  const series: SeriesE24Item[] = [];

  for (let decade = 0; decade <= 6; decade++) {
    seriesE24Subsets.forEach((subset) => {
      series.push({
        value: Math.round(subset.value * Math.pow(10, decade)),
        digit1: subset.digit1,
        digit2: subset.digit2,
        digit3: subset.digit3,
        multiplier: multiplierColorByDecade[decade],
        tolerance: 'brown',
        bandsCount: 5,
      });
    });
  }

  const decade = 7;
  const subset = seriesE24Subsets[0];
  series.push({
    value: Math.round(subset.value * Math.pow(10, decade)),
    digit1: subset.digit1,
    digit2: subset.digit2,
    digit3: subset.digit3,
    multiplier: multiplierColorByDecade[decade],
    tolerance: 'brown',
    bandsCount: 5,
  });

  return series;
}

export function generateArduinoStarterKit(): SeriesE12Item[] {
  console.log('generateSeriesE12', generateSeriesE12());
  return generateSeriesE12().filter((item) =>
    [220, 560, 1000, 4700, 10000, 1000000, 10000000].includes(item.value),
  );
}
