import { createReducer, on } from '@ngrx/store';
import { Resistor } from '../resistor.model';
import { ResistorApiActions } from './resistor.actions';

export const initialState: Readonly<Resistor> = {
  bandDigit1: { color: 'white' },
  bandDigit2: { color: 'white' },
  bandDigit3: { color: 'white' },
  bandMultiplier: { color: 'white' },
  bandTolerance: { color: 'white' },
  bandThermalCoefficient: { color: 'white' },
};

export const resistorReducer = createReducer(
  initialState,
  on(ResistorApiActions.retrievedResistor, (state, { resistor }) => resistor),
);
