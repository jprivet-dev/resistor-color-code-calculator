import { Component, inject } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ResistorFacade } from './resistor.facade';
import { SeriesE12Item, SeriesE96Item } from './resistor.model';
import { valueToColorMultiplier } from './resistor.model';
import { ESeriesService } from '../shared/e-series.service';
import { parseFloatFixed, M } from '../shared/math.util';

@Component({
  selector: 'app-resistor-offcanvas-content',
  templateUrl: './resistor-offcanvas.component.html',
  styleUrls: ['./resistor-offcanvas.component.scss'],
})
export class ResistorOffcanvasComponent {
  private facade = inject(ResistorFacade);
  private eSeriesService = inject(ESeriesService);
  activeOffcanvas = inject(NgbActiveOffcanvas);
  readonly seriesName$ = this.facade.seriesName$;
  readonly resistance$ = this.facade.resistance$;
  readonly decode$ = this.facade.decode$;
  readonly seriesE96Items = this.generateSeriesE96();

  updateSeries($event: any): void {
    this.facade.openOffcanvas($event.target.value);
  }

  chooseSeriesE12Item(item: SeriesE12Item): void {
    this.facade.updateResistor4Band({
      digit1: { color: item.digit1 },
      digit2: { color: item.digit2 },
      digit3: { color: 'white' },
      multiplier: { color: item.multiplier },
      tolerance: { color: item.tolerance },
      thermalCoefficient: { color: 'white' },
      bandsCount: item.bandsCount,
    });
  }

  chooseSeriesE96Item(item: SeriesE96Item): void {
    this.facade.updateResistor5Band({
      digit1: { color: item.digit1 },
      digit2: { color: item.digit2 },
      digit3: { color: item.digit3 },
      multiplier: { color: item.multiplier },
      tolerance: { color: item.tolerance },
      thermalCoefficient: { color: 'white' },
      bandsCount: item.bandsCount,
    });
  }

  closeOffcanvas(): void {
    // TODO: find and other solution to know if the offcanvas is open
    this.facade.closeOffcanvas();
    this.activeOffcanvas.dismiss('Cross click');
  }

  generateSeriesE96(): SeriesE96Item[] {
    const eSeries = this.eSeriesService.getESeries('E96');
    const series: SeriesE96Item[] = [];
    const multipliers = [-1, 0, 1, 2, 3, 4, 5];

    multipliers.forEach((multiplier) => {
      eSeries.officialValues.forEach((value) => {
        let finalValue = value * Math.pow(10, multiplier + 2);
        finalValue =
          finalValue < 100 ? finalValue : parseFloatFixed(finalValue, 2);
        const colors = this.eSeriesService.extractColorDigit123(value);
        if (finalValue <= 10 * M) {
          series.push({
            value: finalValue,
            digit1: colors.digit1,
            digit2: colors.digit2,
            digit3: colors.digit3,
            multiplier: valueToColorMultiplier(multiplier),
            tolerance: 'brown',
            bandsCount: 5,
          });
        }
      });
    });

    return series;
  }
}
