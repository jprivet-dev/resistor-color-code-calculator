import { Component, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ResistorFacade } from './resistor.facade';
import { SeriesE12Item } from './resistor.model';
import { generateSeriesE12 } from './resistor.utils';

@Component({
  selector: 'app-resistor-offcanvas',
  templateUrl: './resistor-offcanvas.component.html',
  styleUrls: ['./resistor-offcanvas.component.scss'],
})
export class ResistorOffcanvasComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private resistorFacade = inject(ResistorFacade);

  openBottom(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      position: 'bottom',
      scroll: true,
      backdrop: false,
    });
  }

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
