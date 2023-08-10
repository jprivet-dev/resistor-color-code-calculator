export interface MetricSuffixModel {
  base10: number;
  name: string;
  symbol: string;
}

export const MetricSuffixList: MetricSuffixModel[] = [
  { base10: 24, name: 'yotta', symbol: 'Y' },
  { base10: 21, name: 'zetta', symbol: 'Z' },
  { base10: 18, name: 'exa', symbol: 'E' },
  { base10: 15, name: 'peta', symbol: 'P' },
  { base10: 12, name: 'tera', symbol: 'T' },
  { base10: 9, name: 'giga', symbol: 'G' },
  { base10: 6, name: 'mega', symbol: 'M' },
  { base10: 3, name: 'kilo', symbol: 'k' },
  { base10: 0, name: '', symbol: '' },
  { base10: -3, name: 'milli', symbol: 'm' },
  { base10: -6, name: 'micro', symbol: 'μ' },
  { base10: -9, name: 'nano', symbol: 'n' },
  { base10: -12, name: 'pico', symbol: 'p' },
  { base10: -15, name: 'femto', symbol: 'f' },
  { base10: -18, name: 'atto', symbol: 'a' },
  // MINIMUM! We have, with javascript, some problems
  // with these extremely small values
  // {base10: -21, name: 'zepto', symbol: 'z'},
  // {base10: -24, name: 'yocto', symbol: 'y'},
];

export interface MetricSuffixServiceArgumentsModel {
  value: number;
  unit: string;
  fractionDigits: number;
}

export interface MetricSuffixServiceResultModel
  extends MetricSuffixServiceArgumentsModel {
  valueWithoutMetricSuffix: string;
  valueWithMetricSuffix: string;
}
