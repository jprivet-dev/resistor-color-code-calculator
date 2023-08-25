import { Component, inject } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ResistorFacade } from './resistor.facade';
import { SeriesE12Item, SeriesE24Item } from './resistor.model';
import {
  generateArduinoStarterKit,
  generateSeriesE12,
  generateSeriesE24,
} from './resistor.utils';

@Component({
  selector: 'app-resistor-offcanvas-content',
  templateUrl: './resistor-offcanvas.component.html',
  styleUrls: ['./resistor-offcanvas.component.scss'],
})
export class ResistorOffcanvasComponent {
  private resistorFacade = inject(ResistorFacade);
  activeOffcanvas = inject(NgbActiveOffcanvas);
  readonly seriesName$ = this.resistorFacade.seriesName$;

  generateSeriesE12(): SeriesE12Item[] {
    return generateSeriesE12();
  }

  generateSeriesE24(): SeriesE24Item[] {
    return generateSeriesE24();
  }

  generateArduinoStarterKit(): SeriesE12Item[] {
    return generateArduinoStarterKit();
  }

  chooseSeriesE12Item(item: SeriesE12Item): void {
    this.resistorFacade.updateResistor4Band({
      digit1: { color: item.digit1 },
      digit2: { color: item.digit2 },
      digit3: { color: 'white' },
      multiplier: { color: item.multiplier },
      tolerance: { color: item.tolerance },
      thermalCoefficient: { color: 'white' },
      bandsCount: item.bandsCount,
    });
  }

  chooseSeriesE24Item(item: SeriesE24Item): void {
    this.resistorFacade.updateResistor5Band({
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
    this.resistorFacade.closeOffcanvas();
    this.activeOffcanvas.dismiss('Cross click');
  }
}
