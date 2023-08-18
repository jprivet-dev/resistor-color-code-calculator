import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { BandName } from './resistor.model';
import { getBandsNameListByBandsCount } from './resistor.model';
import { BandColor } from './resistor.model';
import { resistorActions } from './state/resistor.actions';
import { resistorApiActions } from './state/resistor.actions';
import { Store } from '@ngrx/store';
import { ResistorService } from './resistor.service';
import { selectResistor } from './state/resistor.selectors';
import { selectResistance } from './state/resistor.selectors';
import { selectTolerance } from './state/resistor.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResistorFacade {
  private store = inject(Store);
  private service = inject(ResistorService);

  readonly resistor$ = this.store.select(selectResistor);
  readonly bandsCounts = this.service.bandsCounts;
  readonly bandsColors = this.service.bandsColors;
  readonly resistorConfig = this.service.resistorConfig;

  readonly resistance$ = this.store.select(selectResistance);
  readonly tolerance$ = this.store.select(selectTolerance);

  retrieveResistor() {
    this.store.dispatch(resistorApiActions.retrieveResistor());
  }

  setBandsCount(bandsCount: number): void {
    this.store.dispatch(resistorActions.updateBandsCount({ bandsCount }));
  }

  bandsNameListByBandsCount(bandsCount: number): BandName[] {
    return getBandsNameListByBandsCount(bandsCount);
  }

  setBandDigit1(color: BandColor): void {
    this.store.dispatch(resistorActions.updateDigit1({ color }));
  }

  setBandDigit2(color: BandColor): void {
    this.store.dispatch(resistorActions.updateDigit2({ color }));
  }

  setBandDigit3(color: BandColor): void {
    this.store.dispatch(resistorActions.updateDigit3({ color }));
  }

  setBandMultiplier(color: BandColor): void {
    this.store.dispatch(resistorActions.updateMultiplier({ color }));
  }

  setBandTolerance(color: BandColor): void {
    this.store.dispatch(resistorActions.updateTolerance({ color }));
  }

  setBandThermalCoefficient(color: BandColor): void {
    this.store.dispatch(resistorActions.updateThermalCoefficient({ color }));
  }
}
