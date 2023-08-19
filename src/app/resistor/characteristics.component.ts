import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ResistorFacade } from './resistor.facade';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
})
export class CharacteristicsComponent {
  private facade = inject(ResistorFacade);

  readonly resistance$ = this.facade.resistance$;
  readonly resistanceMin$ = this.facade.resistanceMin$;
  readonly resistanceMax$ = this.facade.resistanceMax$;
  readonly tolerance$ = this.facade.tolerance$;
  readonly toleranceOhm$ = this.facade.toleranceOhm$;
  readonly thermalCoefficient$ = this.facade.thermalCoefficient$;

  activeTabId = 1;
}
