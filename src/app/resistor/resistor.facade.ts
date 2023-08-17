import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { BandName } from './resistor.model';
import { getBandsNameListByBandsCount } from './resistor.model';
import { ResistorActions } from './state/resistor.actions';
import { ResistorApiActions } from './state/resistor.actions';
import { Store } from '@ngrx/store';
import { ResistorService } from './resistor.service';
import { selectResistor } from './state/resistor.selectors';

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

  retrieveResistor() {
    this.store.dispatch(ResistorApiActions.retrieveResistor());
  }

  setBandsCount(bandsCount: number): void {
    this.store.dispatch(ResistorActions.updateBandsCount({ bandsCount }));
  }

  bandsNameListByBandsCount(bandsCount: number): BandName[] {
    return getBandsNameListByBandsCount(bandsCount);
  }

  setBandDigit1(color: string): void {
    this.store.dispatch(ResistorActions.updateDigit1({ color }));
  }

  setBandDigit2(color: string): void {
    this.store.dispatch(ResistorActions.updateDigit2({ color }));
  }

  setBandDigit3(color: string): void {
    this.store.dispatch(ResistorActions.updateDigit3({ color }));
  }

  setBandMultiplier(color: string): void {
    this.store.dispatch(ResistorActions.updateMultiplier({ color }));
  }

  setBandTolerance(color: string): void {
    this.store.dispatch(ResistorActions.updateTolerance({ color }));
  }

  setBandThermalCoefficient(color: string): void {
    this.store.dispatch(ResistorActions.updateThermalCoefficient({ color }));
  }
}
