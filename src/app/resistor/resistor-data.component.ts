import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ResistorFacade } from './resistor.facade';

@Component({
  selector: 'app-resistor-data',
  templateUrl: './resistor-data.component.html',
  styleUrls: ['./resistor-data.component.scss'],
})
export class ResistorDataComponent {
  private facade = inject(ResistorFacade);
  readonly resistance$ = this.facade.resistance$;
  readonly tolerance$ = this.facade.tolerance$;

  activeTabId = 1;
}
