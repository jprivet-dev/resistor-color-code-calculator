import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ResistorFacade } from './resistor.facade';
import { BandColor } from './resistor.model';
import { Decode } from './resistor.model';

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
  readonly decode$ = this.facade.decode$;

  readonly resistance$ = this.facade.resistance$;
  readonly tolerance$ = this.facade.tolerance$;
  readonly thermalCoefficient$ = this.facade.thermalCoefficient$;

  ngOnInit() {
    this.facade.retrieveResistor();
  }

  setBandsCount(bandsCount: number): void {
    this.facade.setBandsCount(bandsCount);
  }

  updateDigit1(color: BandColor): void {
    this.facade.setBandDigit1(color);
  }

  updateDigit2(color: BandColor): void {
    this.facade.setBandDigit2(color);
  }

  updateDigit3(color: BandColor): void {
    this.facade.setBandDigit3(color);
  }

  updateMultiplier(color: BandColor): void {
    this.facade.setBandMultiplier(color);
  }

  updateTolerance(color: BandColor): void {
    this.facade.setBandTolerance(color);
  }

  updateThermalCoefficient(color: BandColor): void {
    this.facade.setBandThermalCoefficient(color);
  }

  toleranceColorIsDisabled(decode: Decode, color: BandColor): string | null {
    if (decode.tolerance.forceToleranceToTwentyPercent) {
      return color === 'none' ? null : '';
    }
    return color === 'none' ? '' : null;
  }
}
