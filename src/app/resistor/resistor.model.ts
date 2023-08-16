export type BandName =
  | 'digit1'
  | 'digit2'
  | 'digit3'
  | 'multiplier'
  | 'tolerance'
  | 'thermalCoefficient';

export interface ActivatedBandsByCount {
  bandsCount: number;
  bandsNameList: BandName[];
}

const defaultActivatedBandsByCount: BandName[] = [
  'digit1',
  'digit2',
  'multiplier',
];

export const activatedBandsByCountConfig: ActivatedBandsByCount[] = [
  { bandsCount: 3, bandsNameList: defaultActivatedBandsByCount },
  {
    bandsCount: 4,
    bandsNameList: ['digit1', 'digit2', 'multiplier', 'tolerance'],
  },
  {
    bandsCount: 5,
    bandsNameList: ['digit1', 'digit2', 'digit3', 'multiplier', 'tolerance'],
  },
  {
    bandsCount: 6,
    bandsNameList: [
      'digit1',
      'digit2',
      'digit3',
      'multiplier',
      'tolerance',
      'thermalCoefficient',
    ],
  },
];

export interface Band {
  color: string;
}

export interface Resistor {
  digit1: Band;
  digit2: Band;
  digit3: Band;
  multiplier: Band;
  tolerance: Band;
  thermalCoefficient: Band;
  bandsCount: number;
}

export const getBandsNameListByBandsCount = (
  bandsCount: number,
): BandName[] => {
  const activatedBands = activatedBandsByCountConfig.find(
    (activatedBandsName) => activatedBandsName.bandsCount === bandsCount,
  );
  return activatedBands !== undefined
    ? activatedBands.bandsNameList
    : defaultActivatedBandsByCount;
};

export interface BandValuesByColors {
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

export type BandColor = keyof BandValuesByColors;
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

export const ResistorConfig: {
  digit1: BandValuesByColors;
  digit2: BandValuesByColors;
  digit3: BandValuesByColors;
  multiplier: BandValuesByColors;
  tolerance: BandValuesByColors;
  thermalCoefficient: BandValuesByColors;
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
