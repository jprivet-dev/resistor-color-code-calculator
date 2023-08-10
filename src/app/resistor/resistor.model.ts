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

export const activatedBandsByCountConf: ActivatedBandsByCount[] = [
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

export interface ResistorBand {
  color: string;
}

export interface Resistor {
  digit1: ResistorBand;
  digit2: ResistorBand;
  digit3: ResistorBand;
  multiplier: ResistorBand;
  tolerance: ResistorBand;
  thermalCoefficient: ResistorBand;
  bandsCount: number;
}

export const getBandsNameListByBandsCount = (
  bandsCount: number,
): BandName[] => {
  const activatedBands = activatedBandsByCountConf.find(
    (activatedBandsName) => activatedBandsName.bandsCount === bandsCount,
  );
  return activatedBands !== undefined
    ? activatedBands.bandsNameList
    : defaultActivatedBandsByCount;
};
