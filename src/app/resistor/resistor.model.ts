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
    lastColorWithoutNone: BandColor;
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
  none: number | null;
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
}

export type BandColor = keyof BandColorsValues;
export const bandsColors: BandColor[] = [
  'none',
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
];

export const resistorConfig: {
  digit1: BandColorsValues;
  digit2: BandColorsValues;
  digit3: BandColorsValues;
  multiplier: BandColorsValues;
  tolerance: BandColorsValues;
  thermalCoefficient: BandColorsValues;
} = {
  digit1: {
    none: null,
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
  },
  digit2: {
    none: null,
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
  },
  digit3: {
    none: null,
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
  },
  multiplier: {
    none: null,
    black: 1,
    brown: 1e1,
    red: 1e2,
    orange: 1e3,
    yellow: 1e4,
    green: 1e5,
    blue: 1e6,
    violet: 1e7,
    grey: 1e8,
    white: 1e9,
    gold: null,
    silver: null,
  },
  tolerance: {
    none: 20,
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
  },
  thermalCoefficient: {
    none: null,
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
  },
};
