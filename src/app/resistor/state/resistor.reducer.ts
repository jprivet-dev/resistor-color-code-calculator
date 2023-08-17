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
  on(
    ResistorApiActions.retrieveResistorSuccess,
    (state, { resistor }) => resistor,
  ),
  on(ResistorActions.updateBandsCount, (state, { bandsCount }) => ({
    ...state,
    bandsCount,
  })),
  on(ResistorActions.updateDigit1, (state, { color }) => ({
    ...state,
    digit1: { ...state.digit1, color },
  })),
  on(ResistorActions.updateDigit2, (state, { color }) => ({
    ...state,
    digit2: { ...state.digit2, color },
  })),
  on(ResistorActions.updateDigit3, (state, { color }) => ({
    ...state,
    digit3: { ...state.digit3, color },
  })),
  on(ResistorActions.updateMultiplier, (state, { color }) => ({
    ...state,
    multiplier: { ...state.multiplier, color },
  })),
  on(ResistorActions.updateTolerance, (state, { color }) => ({
    ...state,
    tolerance: { ...state.tolerance, color },
  })),
  on(ResistorActions.updateThermalCoefficient, (state, { color }) => ({
    ...state,
    thermalCoefficient: { ...state.thermalCoefficient, color },
  })),
);
