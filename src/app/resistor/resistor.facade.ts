import { inject, Injectable } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { CharacteristicsService } from './characteristics.service';
import { ResistorOffcanvasComponent } from './resistor-offcanvas.component';
import { BandColor, Resistor } from './resistor.model';
import { ResistorService } from './resistor.service';
import {
  characteristicsActions,
  decodeActions,
  resistorActions,
  resistorApiActions,
} from './state/resistor.actions';
import {
  selectDecode,
  selectResistance,
  selectResistanceMax,
  selectResistanceMin,
  selectResistor,
  selectThermalCoefficient,
  selectTolerance,
  selectToleranceOhm,
} from './state/resistor.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResistorFacade {
  private store = inject(Store);
  private resistorService = inject(ResistorService);
  private characteristicsService = inject(CharacteristicsService);

  readonly bandsCounts = this.resistorService.bandsCounts;
  readonly bandsColors = this.resistorService.bandsColors;
  readonly resistorConfig = this.resistorService.resistorConfig;

  readonly resistor$ = this.store.select(selectResistor);
  readonly decode$ = this.store.select(selectDecode);

  readonly resistance$ = this.store.select(selectResistance);
  readonly resistanceMin$ = this.store.select(selectResistanceMin);
  readonly resistanceMax$ = this.store.select(selectResistanceMax);
  readonly tolerance$ = this.store.select(selectTolerance);
  readonly toleranceOhm$ = this.store.select(selectToleranceOhm);
  readonly thermalCoefficient$ = this.store.select(selectThermalCoefficient);

  private offcanvasService = inject(NgbOffcanvas);
  private offcanvasIsOpen = false;

  constructor() {
    this.resistor$.subscribe((resistor) => {
      // TODO: isn't it better to have an effect or use a meta reducer ?
      if (resistor.bandsCount > 0) {
        this.resistorService.saveResistor(resistor);
      }
      this.store.dispatch(decodeActions.decodeResistor({ resistor }));
    });

    this.decode$.subscribe((decode) => {
      this.store.dispatch(
        characteristicsActions.calculateCharacteristics({
          characteristics: this.characteristicsService.calculateAll(decode),
        }),
      );
    });
  }

  retrieveResistor() {
    this.store.dispatch(resistorApiActions.retrieveResistor());
  }

  setResistor(resistor: Resistor) {
    this.store.dispatch(resistorActions.updateResistor4Band({ resistor }));
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

  openOffcanvas() {
    if (this.offcanvasIsOpen) {
      return;
    }

    this.offcanvasService.open(ResistorOffcanvasComponent, {
      position: 'bottom',
      scroll: true,
      backdrop: false,
      panelClass: 'bg-body-tertiary',
    });

    this.offcanvasIsOpen = true;
  }

  closeOffcanvas(): void {
    this.offcanvasIsOpen = false;
  }
}
