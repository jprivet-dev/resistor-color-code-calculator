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
}
