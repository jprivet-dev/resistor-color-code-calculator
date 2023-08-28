import { Pipe, PipeTransform } from '@angular/core';
import { UnitUtil } from './unit.util';

export type FormatType =
  | 'ampere'
  | 'default'
  | 'multiplier'
  | 'power'
  | 'resistance'
  | 'resistanceMax'
  | 'resistanceMin'
  | 'thermalCoefficient'
  | 'tolerance'
  | 'toleranceOhm'
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
          UnitUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
            .valueWithUnit
        );
        break;
      case 'tolerance':
        return `±${value} %`;
        break;
      case 'toleranceOhm':
        return (
          '± ' +
          UnitUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
            .valueWithUnit
        );
        break;
      case 'thermalCoefficient':
        return `${value} ppm/K`;
        break;
      case 'resistance':
        return UnitUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
          .valueWithUnit;
        break;
      case 'resistanceMax':
        return (
          UnitUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
            .valueWithUnit + ' max'
        );
        break;
      case 'resistanceMin':
        return (
          UnitUtil.convert({ value, fractionDigits: 2, unit: 'Ω' })
            .valueWithUnit + ' min'
        );
        break;
      case 'power':
        return UnitUtil.convert({ value, fractionDigits: 2, unit: 'W' })
          .valueWithUnit;
        break;
      case 'volt':
        return UnitUtil.convert({ value, fractionDigits: 2, unit: 'V' })
          .valueWithUnit;
        break;
      case 'ampere':
        return UnitUtil.convert({ value, fractionDigits: 2, unit: 'A' })
          .valueWithUnit;
        break;
    }
    return value;
  }
}
