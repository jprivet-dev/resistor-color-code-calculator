import { Component, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { generateSeriesE12 } from './resistor.utils';

@Component({
  selector: 'app-resistor-offcanvas',
  templateUrl: './resistor-offcanvas.component.html',
  styleUrls: ['./resistor-offcanvas.component.scss'],
})
export class ResistorOffcanvasComponent {
  private offcanvasService = inject(NgbOffcanvas);

  openBottom(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      position: 'bottom',
      scroll: true,
      backdrop: false,
    });
  }

  generateSeriesE12(): number[] {
    return generateSeriesE12();
  }
}
