import { Component, inject } from '@angular/core';
import { ResistorFacade } from './resistor.facade';

@Component({
  selector: 'app-resistor-tabs',
  templateUrl: './resistor-tabs.component.html',
  styleUrls: ['./resistor-tabs.component.scss'],
})
export class ResistorTabsComponent {
  private facade = inject(ResistorFacade);

  readonly decode$ = this.facade.decode$;

  readonly resistance$ = this.facade.resistance$;
  readonly resistanceMin$ = this.facade.resistanceMin$;
  readonly resistanceMax$ = this.facade.resistanceMax$;
  readonly tolerance$ = this.facade.tolerance$;
  readonly toleranceOhm$ = this.facade.toleranceOhm$;
  readonly thermalCoefficient$ = this.facade.thermalCoefficient$;

  activeTabId = 1;
}
