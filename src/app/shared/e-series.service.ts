import { Injectable } from '@angular/core';
import { valueToColorDigit123 } from '../resistor/resistor.model';
import { ExtractColorDigit123 } from '../resistor/resistor.model';
import { ESeries, eSeriesList, ESeriesName } from './e-series.model';
import { parseFloatFixed } from './math.util';
import { extractDigits } from './math.util';

@Injectable({
  providedIn: 'root',
})
export class ESeriesService {
  private eSeriesList = eSeriesList;

  getESeries(eSeriesName: ESeriesName): ESeries {
    const eSeries = this.eSeriesList.find(
      (eSeries) => eSeries.name === eSeriesName,
    );
    if (eSeries) {
      return eSeries;
    }
    throw new Error(`"${eSeriesName} does not exist."`);
  }

  generateValues(
    eSeriesName: ESeriesName,
    start: number,
    end: number,
  ): number[] {
    const values: number[] = [];
    const eSeries = this.getESeries(eSeriesName);
    let decade = 0;
    let value = 0;

    do {
      eSeries.officialValues.forEach((officialValue) => {
        value = parseFloatFixed(officialValue * Math.pow(10, decade), 2);
        if (start <= value && value <= end) {
          values.push(value);
        }
      });
      decade++;
    } while (value <= end);

    return values;
  }

  extractColorDigit123(value: number): ExtractColorDigit123 {
    let digits = extractDigits(value);

    if (digits.length === 1) {
      digits = `${digits}00`;
    } else if (digits.length === 2) {
      digits = `${digits}0`;
    } else if (digits.length > 3) {
      throw new Error('Cannot be greater than 3 digits.');
    }

    const parts: string[] = digits.split('');

    return {
      digit1: valueToColorDigit123(parseInt(parts[0])),
      digit2: valueToColorDigit123(parseInt(parts[1])),
      digit3: valueToColorDigit123(parseInt(parts[2])),
    };
  }
}
