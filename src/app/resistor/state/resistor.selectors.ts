import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { Resistor } from '../resistor.model';
import { Characteristics } from '../resistor.model';

export const selectResistor =
  createFeatureSelector<Readonly<Resistor>>('resistor');

export const selectCharacteristics =
  createFeatureSelector<Readonly<Characteristics>>('characteristics');

export const selectResistance = createSelector(
  selectCharacteristics,
  (state) => state.resistance,
);
