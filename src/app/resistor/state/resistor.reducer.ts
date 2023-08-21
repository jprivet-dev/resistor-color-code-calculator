import { createReducer, on } from '@ngrx/store';
import { Resistor } from '../resistor.model';
import { Characteristics } from '../resistor.model';
import { Decode } from '../resistor.model';
import { resistorActions, resistorApiActions } from './resistor.actions';
import { characteristicsActions } from './resistor.actions';
import { decodeActions } from './resistor.actions';
import { decodeResistor } from '../resistor.utils';

export const resistorInitialState: Readonly<Resistor> = {
  digit1: { color: 'white' },
  digit2: { color: 'white' },
  digit3: { color: 'white' },
  multiplier: { color: 'white' },
  tolerance: { color: 'white' },
  thermalCoefficient: { color: 'white' },
  bandsCount: 0,
};

export const resistorReducer = createReducer(
  resistorInitialState,
  on(
    resistorApiActions.retrieveResistorSuccess,
    (state, { resistor }) => resistor,
  ),
  on(resistorActions.updateBandsCount, (state, { bandsCount }) => ({
    ...state,
    bandsCount,
  })),
  on(resistorActions.updateDigit1, (state, { color }) => ({
    ...state,
    digit1: { ...state.digit1, color },
  })),
  on(resistorActions.updateDigit2, (state, { color }) => ({
    ...state,
    digit2: { ...state.digit2, color },
  })),
  on(resistorActions.updateDigit3, (state, { color }) => ({
    ...state,
    digit3: { ...state.digit3, color },
  })),
  on(resistorActions.updateMultiplier, (state, { color }) => ({
    ...state,
    multiplier: { ...state.multiplier, color },
  })),
  on(resistorActions.updateTolerance, (state, { color }) => ({
    ...state,
    tolerance: { ...state.tolerance, color },
  })),
  on(resistorActions.updateThermalCoefficient, (state, { color }) => ({
    ...state,
    thermalCoefficient: { ...state.thermalCoefficient, color },
  })),
);

export const decodeInitialState: Readonly<Decode> = {
  digit1: { color: 'white', value: 0 },
  digit2: { color: 'white', value: 0 },
  digit3: { color: 'white', value: 0, active: false },
  multiplier: { color: 'white', value: 0 },
  tolerance: {
    color: 'white',
    value: 0,
    active: false,
    forceToleranceToTwentyPercent: false,
  },
  thermalCoefficient: { color: 'white', value: 0, active: false },
  bandsCount: 0,
};

export const resistorReducerDecode = createReducer(
  decodeInitialState,
  on(decodeActions.decodeResistor, (state, { resistor }) =>
    decodeResistor(state, resistor),
  ),
);

export const characteristicsInitialState: Readonly<Characteristics> = {
  resistance: 0,
  resistanceMax: 0,
  resistanceMin: 0,
  tolerance: 0,
  toleranceOhm: 0,
  thermalCoefficient: 0,
};

export const characteristicsReducer = createReducer(
  characteristicsInitialState,
  on(
    characteristicsActions.calculateCharacteristics,
    (state, { characteristics }) => ({
      ...state,
      ...characteristics,
    }),
  ),
);
