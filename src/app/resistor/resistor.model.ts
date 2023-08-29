export type BandName =
  | 'digit1'
  | 'digit2'
  | 'digit3'
  | 'multiplier'
  | 'tolerance'
  | 'thermalCoefficient';

export interface Resistor {
  digit1: { color: BandColor };
  digit2: { color: BandColor };
  digit3: { color: BandColor };
  multiplier: { color: BandColor };
  tolerance: { color: BandColor };
  thermalCoefficient: { color: BandColor };
  bandsCount: number;
}

export interface Decode {
  digit1: { color: BandColor; value: number | null };
  digit2: { color: BandColor; value: number | null };
  digit3: { color: BandColor; value: number | null; active: boolean };
  multiplier: { color: BandColor; value: number | null };
  tolerance: {
    color: BandColor;
    value: number | null;
    active: boolean;
    forceToleranceToTwentyPercent: boolean;
  };
  thermalCoefficient: {
    color: BandColor;
    value: number | null;
    active: boolean;
  };
  bandsCount: number;
}

export interface Characteristics {
  resistance: number;
  resistanceMax: number;
  resistanceMin: number;
  tolerance: number;
  toleranceOhm: number;
  thermalCoefficient: number;
}

export interface BandColorsValues {
  black: number | null;
  brown: number | null;
  red: number | null;
  orange: number | null;
  yellow: number | null;
  green: number | null;
  blue: number | null;
  violet: number | null;
  grey: number | null;
  white: number | null;
  gold: number | null;
  silver: number | null;
  none: number | null;
}

export type BandColor = keyof BandColorsValues;
export const bandsColors: BandColor[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
  'gold',
  'silver',
  'none',
];

export interface ResistorConfig {
  digit1: BandColorsValues;
  digit2: BandColorsValues;
  digit3: BandColorsValues;
  multiplier: BandColorsValues;
  tolerance: BandColorsValues;
  thermalCoefficient: BandColorsValues;
}

export const resistorConfig: ResistorConfig = {
  digit1: {
    black: null,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
    gold: null,
    silver: null,
    none: null,
  },
  digit2: {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
    gold: null,
    silver: null,
    none: null,
  },
  digit3: {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
    gold: null,
    silver: null,
    none: null,
  },
  multiplier: {
    black: 1,
    brown: 1e1,
    red: 1e2,
    orange: 1e3,
    yellow: 1e4,
    green: 1e5,
    blue: 1e6,
    violet: 1e7,
    grey: null,
    white: null,
    gold: 0.1,
    silver: 0.01,
    none: null,
  },
  tolerance: {
    black: null,
    brown: 1,
    red: 2,
    orange: null,
    yellow: null,
    green: 0.5,
    blue: 0.25,
    violet: 0.1,
    grey: 0.05,
    white: null,
    gold: 5,
    silver: 10,
    none: 20,
  },
  thermalCoefficient: {
    black: null,
    brown: 100,
    red: 50,
    orange: 15,
    yellow: 25,
    green: null,
    blue: 10,
    violet: 5,
    grey: null,
    white: null,
    gold: null,
    silver: null,
    none: null,
  },
};

export interface ValueToColorDigit123 {
  color: BandColor;
  value: number;
}

export interface ValueToColorMultiplier {
  color: BandColor;
  power: number;
}

export function valueToColorDigit123(value: number): BandColor {
  const valueToColorItems: ValueToColorDigit123[] = [
    { color: 'black', value: 0 },
    { color: 'brown', value: 1 },
    { color: 'red', value: 2 },
    { color: 'orange', value: 3 },
    { color: 'yellow', value: 4 },
    { color: 'green', value: 5 },
    { color: 'blue', value: 6 },
    { color: 'violet', value: 7 },
    { color: 'grey', value: 8 },
    { color: 'white', value: 9 },
  ];

  const valueToColor = valueToColorItems.find((item) => item.value === value);
  if (valueToColor) {
    return valueToColor.color;
  }

  throw new Error(`Color does not exist for value "${value}".`);
}

export function valueToColorMultiplier(power: number): BandColor {
  const valueToColorItems: ValueToColorMultiplier[] = [
    { color: 'black', power: 0 },
    { color: 'brown', power: 1 },
    { color: 'red', power: 2 },
    { color: 'orange', power: 3 },
    { color: 'yellow', power: 4 },
    { color: 'green', power: 5 },
    { color: 'blue', power: 6 },
    { color: 'violet', power: 7 },
    { color: 'gold', power: -1 },
    { color: 'silver', power: -2 },
  ];

  const valueToColor = valueToColorItems.find((item) => item.power === power);
  if (valueToColor) {
    return valueToColor.color;
  }

  throw new Error(`Color does not exist for value "${power}".`);
}

export type SeriesName = 'E24' | 'E96' | 'ArduinoStarterKit';

export interface SeriesE24Subset {
  value: number;
  digit1: BandColor;
  digit2: BandColor;
}

export interface SeriesE24Item {
  value: number;
  digit1: BandColor;
  digit2: BandColor;
  multiplier: BandColor;
  tolerance: BandColor;
  bandsCount: number;
}

export interface SeriesE96Subset {
  value: number;
  digit1: BandColor;
  digit2: BandColor;
  digit3: BandColor;
}

export interface SeriesE96Item {
  value: number;
  digit1: BandColor;
  digit2: BandColor;
  digit3: BandColor;
  multiplier: BandColor;
  tolerance: BandColor;
  bandsCount: number;
}

export const resistorDefault: Resistor = {
  digit1: { color: 'brown' },
  digit2: { color: 'black' },
  digit3: { color: 'red' },
  multiplier: { color: 'orange' },
  tolerance: { color: 'gold' },
  thermalCoefficient: { color: 'red' },
  bandsCount: 4,
};

export interface ExtractColorDigit123 {
  digit1: BandColor;
  digit2: BandColor;
  digit3: BandColor;
}
