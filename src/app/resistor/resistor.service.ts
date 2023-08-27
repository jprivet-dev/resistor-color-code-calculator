import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '@shared/local-storage.service';
import { Observable, of } from 'rxjs';
import {
  bandsColors,
  Resistor,
  resistorConfig,
  resistorDefault,
} from './resistor.model';

@Injectable({
  providedIn: 'root',
})
export class ResistorService {
  private localStorageService = inject(LocalStorageService);
  readonly KEY_RESISTOR = 'resistor';
  readonly KEY_OHMS_LAW_I = 'ohms_law_i';
  readonly KEY_OHMS_LAW_U = 'ohms_law_u';

  readonly bandsCounts = [3, 4, 5, 6];
  readonly bandsColors = bandsColors;
  readonly resistorConfig = resistorConfig;

  saveResistor(resistor: Readonly<Resistor>): void {
    this.localStorageService.setObject(this.KEY_RESISTOR, resistor);
  }

  retrieveResistor(): Observable<Resistor> {
    const resistor = this.localStorageService.getObject(this.KEY_RESISTOR);
    return resistor === null ? of(resistorDefault) : of(resistor as Resistor);
  }

  saveI(i: number): void {
    this.localStorageService.set(this.KEY_OHMS_LAW_I, i.toString());
  }

  retrieveI(): number {
    return this.localStorageService.getNumber(this.KEY_OHMS_LAW_I) ?? 0.02;
  }

  saveU(u: number): void {
    this.localStorageService.set(this.KEY_OHMS_LAW_U, u.toString());
  }

  retrieveU(): number {
    return this.localStorageService.getNumber(this.KEY_OHMS_LAW_U) ?? 5;
  }
}
