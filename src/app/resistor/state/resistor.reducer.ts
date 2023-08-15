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
  on(ResistorActions.bandDigit1, (state, { color }) => ({
    ...state,
    digit1: { ...state.digit1, color },
  })),
  on(ResistorActions.bandDigit2, (state, { color }) => ({
    ...state,
    digit2: { ...state.digit2, color },
  })),
  on(ResistorActions.bandDigit3, (state, { color }) => ({
    ...state,
    digit3: { ...state.digit3, color },
  })),
  on(ResistorActions.bandMultiplier, (state, { color }) => ({
    ...state,
    multiplier: { ...state.multiplier, color },
  })),
  on(ResistorActions.bandTolerance, (state, { color }) => ({
    ...state,
    tolerance: { ...state.tolerance, color },
  })),
  on(ResistorActions.bandThermalCoefficient, (state, { color }) => ({
    ...state,
    thermalCoefficient: { ...state.thermalCoefficient, color },
  })),
);
