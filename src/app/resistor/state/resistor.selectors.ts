import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { Resistor } from '../resistor.model';
import { Characteristics } from '../resistor.model';

export const selectResistor =
  createFeatureSelector<Readonly<Resistor>>('resistor');

export const selectBandsCount = createSelector(
  selectResistor,
  (state) => state.bandsCount,
);

export const selectCharacteristics =
  createFeatureSelector<Readonly<Characteristics>>('characteristics');

export const selectResistance = createSelector(
  selectCharacteristics,
  (state) => state.resistance,
);

export const selectResistanceMin = createSelector(
  selectCharacteristics,
  (state) => state.resistanceMin,
);

export const selectResistanceMax = createSelector(
  selectCharacteristics,
  (state) => state.resistanceMax,
);

export const selectTolerance = createSelector(
  selectCharacteristics,
  (state) => state.tolerance,
);

export const selectToleranceOhm = createSelector(
  selectCharacteristics,
  (state) => state.toleranceOhm,
);

export const selectThermalCoefficient = createSelector(
  selectCharacteristics,
  (state) => state.thermalCoefficient,
);
