import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { BandColor } from './resistor.model';
import { resistorActions } from './state/resistor.actions';
import { resistorApiActions } from './state/resistor.actions';
import { Store } from '@ngrx/store';
import { ResistorService } from './resistor.service';
import { selectResistance } from './state/resistor.selectors';
import { selectTolerance } from './state/resistor.selectors';
import { selectResistanceMin } from './state/resistor.selectors';
import { selectResistanceMax } from './state/resistor.selectors';
import { selectToleranceOhm } from './state/resistor.selectors';
import { selectThermalCoefficient } from './state/resistor.selectors';
import { selectDecode } from './state/resistor.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResistorFacade {
  private store = inject(Store);
  private service = inject(ResistorService);

  readonly bandsCounts = this.service.bandsCounts;
  readonly bandsColors = this.service.bandsColors;
  readonly resistorConfig = this.service.resistorConfig;
  readonly decode$ = this.store.select(selectDecode);

  readonly resistance$ = this.store.select(selectResistance);
  readonly resistanceMin$ = this.store.select(selectResistanceMin);
  readonly resistanceMax$ = this.store.select(selectResistanceMax);
  readonly tolerance$ = this.store.select(selectTolerance);
  readonly toleranceOhm$ = this.store.select(selectToleranceOhm);
  readonly thermalCoefficient$ = this.store.select(selectThermalCoefficient);

  retrieveResistor() {
    this.store.dispatch(resistorApiActions.retrieveResistor());
  }

  setBandsCount(bandsCount: number): void {
    this.store.dispatch(resistorActions.updateBandsCount({ bandsCount }));
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
