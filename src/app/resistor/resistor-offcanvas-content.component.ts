import { Component, inject } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ResistorFacade } from './resistor.facade';
import { SeriesE12Item } from './resistor.model';
import { generateSeriesE12 } from './resistor.utils';

@Component({
  selector: 'app-resistor-offcanvas-content',
  templateUrl: './resistor-offcanvas-content.component.html',
  styleUrls: ['./resistor-offcanvas-content.component.scss'],
})
export class ResistorOffcanvasContentComponent {
  private resistorFacade = inject(ResistorFacade);
  activeOffcanvas = inject(NgbActiveOffcanvas);

  generateSeriesE12(): SeriesE12Item[] {
    return generateSeriesE12();
  }

  chooseSeriesE12Item(item: SeriesE12Item): void {
    this.resistorFacade.setResistor({
      digit1: { color: item.digit1Color },
      digit2: { color: item.digit2Color },
      digit3: { color: 'white' },
      multiplier: { color: item.multiplierColor },
      tolerance: { color: item.toleranceColor },
      thermalCoefficient: { color: 'white' },
      bandsCount: item.bandsCount,
    });
  }
}
