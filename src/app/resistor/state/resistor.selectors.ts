import { createFeatureSelector } from '@ngrx/store';
import { Resistor } from '../resistor.model';

export const selectResistor =
  createFeatureSelector<Readonly<Resistor>>('resistor');
