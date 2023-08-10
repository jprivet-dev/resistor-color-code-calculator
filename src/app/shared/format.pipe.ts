import { Pipe, PipeTransform } from '@angular/core';
import { MetricSuffixUtil } from './metric-suffix.util';

export type FormatType =
  | 'ampere'
  | 'default'
  | 'multiplier'
  | 'power'
  | 'resistance'
  | 'resistance_max'
  | 'resistance_min'
  | 'thermal_coefficient'
  | 'tolerance'
  | 'tolerance_ohm'
  | 'volt';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  transform(value: any, format: FormatType): string {
    if (value === null) {
      return '';
    }

    switch (format) {
      case 'multiplier':
        return (
          'x ' +
          MetricSuffixUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
            .valueWithMetricSuffix
        );
        break;
      case 'tolerance':
        return `±${value} %`;
        break;
      case 'tolerance_ohm':
        return (
          '± ' +
          MetricSuffixUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
            .valueWithMetricSuffix
        );
        break;
      case 'thermal_coefficient':
        return `${value} ppm/K`;
        break;
      case 'resistance':
        return MetricSuffixUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
          .valueWithMetricSuffix;
        break;
      case 'resistance_max':
        return (
          MetricSuffixUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
            .valueWithMetricSuffix + ' max'
        );
        break;
      case 'resistance_min':
        return (
          MetricSuffixUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
            .valueWithMetricSuffix + ' min'
        );
        break;
      case 'power':
        return MetricSuffixUtil.convert({ value, fractionDigits: 2, unit: 'W' })
          .valueWithMetricSuffix;
        break;
    }
    return value;
  }
}
