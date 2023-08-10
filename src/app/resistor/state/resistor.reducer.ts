import { createReducer, on } from '@ngrx/store';
import { Resistor } from '../resistor.model';
import { ResistorActions, ResistorApiActions } from './resistor.actions';

export const initialState: Readonly<Resistor> = {
  digit1: { color: 'white' },
  digit2: { color: 'white' },
  digit3: { color: 'white' },
  multiplier: { color: 'white' },
  tolerance: { color: 'white' },
  thermalCoefficient: { color: 'white' },
  bandsCount: 0,
};

export const resistorReducer = createReducer(
  initialState,
  on(ResistorApiActions.retrievedResistor, (state, { resistor }) => resistor),
  on(ResistorActions.bandsCount, (state, { bandsCount }) => ({
    ...state,
    bandsCount,
  })),
);
