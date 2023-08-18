import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ResistorFacade } from './resistor.facade';
import { BandName } from './resistor.model';
import { BandColor } from './resistor.model';
import { Resistor } from './resistor.model';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.scss'],
})
export class ResistorComponent implements OnInit {
  private facade = inject(ResistorFacade);

  readonly bandsCounts = this.facade.bandsCounts;
  readonly bandsColors = this.facade.bandsColors;
  readonly resistorConfig = this.facade.resistorConfig;
  readonly resistor$ = this.facade.resistor$;

  readonly resistance$ = this.facade.resistance$;
  readonly tolerance$ = this.facade.tolerance$;
  readonly thermalCoefficient$ = this.facade.thermalCoefficient$;
  readonly forceToleranceToTwentyPercent$ =
    this.facade.forceToleranceToTwentyPercent$;

  ngOnInit() {
    this.facade.retrieveResistor();
  }

  setBandsCount(bandsCount: number): void {
    this.facade.setBandsCount(bandsCount);
  }

  setBandsNameListByBandsCount(bandsCount: number): BandName[] {
    return this.facade.bandsNameListByBandsCount(bandsCount);
  }

  setBandDigit1(color: BandColor): void {
    this.facade.setBandDigit1(color);
  }

  setBandDigit2(color: BandColor): void {
    this.facade.setBandDigit2(color);
  }

  setBandDigit3(color: BandColor): void {
    this.facade.setBandDigit3(color);
  }

  setBandMultiplier(color: BandColor): void {
    this.facade.setBandMultiplier(color);
  }

  setBandTolerance(color: BandColor): void {
    this.facade.setBandTolerance(color);
  }

  setBandThermalCoefficient(color: BandColor): void {
    this.facade.setBandThermalCoefficient(color);
  }

  toleranceIsActive(resistor: Resistor, color: BandColor): boolean {
    if (resistor.bandsCount === 3) {
      return color === 'none';
    }

    return resistor.tolerance.color === color;
  }

  toleranceIsDisabled(resistor: Resistor, color: BandColor): string | null {
    if (resistor.bandsCount === 3) {
      return color === 'none' ? null : '';
    }

    if (color === 'none') {
      return '';
    }

    return null;
  }
}
