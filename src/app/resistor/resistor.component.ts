import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  bandColorList,
  BandName,
  bandsValuesConfig,
  getBandsNameListByBandsCount,
} from './resistor.model';
import { ResistorService } from './resistor.service';
import { ResistorActions, ResistorApiActions } from './state/resistor.actions';
import { selectResistor } from './state/resistor.selectors';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.scss'],
})
export class ResistorComponent implements OnInit {
  private store = inject(Store);
  private resistorService = inject(ResistorService);

  resistorBandsCountList = [3, 4, 5, 6];
  bandColorList = bandColorList;
  bandsValuesConfig = bandsValuesConfig;

  resistor$ = this.store.select(selectResistor);

  ngOnInit() {
    this.resistorService
      .getResistor()
      .subscribe((resistor) =>
        this.store.dispatch(ResistorApiActions.retrievedResistor({ resistor })),
      );
  }

  setBandsCount(bandsCount: number): void {
    this.store.dispatch(ResistorActions.bandsCount({ bandsCount }));
  }

  getBandsNameListByBandsCount(bandsCount: number): BandName[] {
    return getBandsNameListByBandsCount(bandsCount);
  }

  getResistorColorBg(color: string): string {
    return 'var(--resistor-' + color + '-bg)';
  }

  getResistorColorBorder(color: string): string {
    return 'var(--resistor-' + color + '-border)';
  }

  getResistorColorText(color: string): string {
    return 'var(--resistor-' + color + '-text)';
  }

  setBandDigit1Color(color: string): void {
    this.store.dispatch(ResistorActions.bandDigit1({ color }));
  }

  setBandDigit2Color(color: string): void {
    this.store.dispatch(ResistorActions.bandDigit2({ color }));
  }

  setBandDigit3Color(color: string): void {
    this.store.dispatch(ResistorActions.bandDigit3({ color }));
  }

  setBandMultiplierColor(color: string): void {
    this.store.dispatch(ResistorActions.bandMultiplier({ color }));
  }

  setBandToleranceColor(color: string): void {
    this.store.dispatch(ResistorActions.bandTolerance({ color }));
  }

  setBandThermalCoefficientColor(color: string): void {
    this.store.dispatch(ResistorActions.bandThermalCoefficient({ color }));
  }
}
