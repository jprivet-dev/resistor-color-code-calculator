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
  private facade = inject(ResistorFacade);
  activeOffcanvas = inject(NgbActiveOffcanvas);
  readonly seriesName$ = this.facade.seriesName$;

  readonly seriesE12Items = generateSeriesE12();
  readonly seriesE24Items = generateSeriesE24();
  readonly arduinoStarterKitItems = generateArduinoStarterKit();

  update($event: any): void {
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

  chooseSeriesE24Item(item: SeriesE24Item): void {
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
}
