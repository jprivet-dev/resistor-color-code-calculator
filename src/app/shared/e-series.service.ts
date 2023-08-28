import { Injectable } from '@angular/core';
import { ESeries, eSeriesList, ESeriesName } from './e-series.model';
import { parseFloatFixed } from './math.util';

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
}
