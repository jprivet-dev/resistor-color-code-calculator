import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Resistor } from '../resistor.model';

export const ResistorActions = createActionGroup({
  source: 'Resistor',
  events: {
    'Band Digit 1': props<{ color: string }>(),
    'Band Digit 2': props<{ color: string }>(),
    'Band Digit 3': props<{ color: string }>(),
    'Band Multiplier': props<{ color: string }>(),
    'Band Tolerance': props<{ color: string }>(),
    'Band Thermal Coefficient': props<{ color: string }>(),
    'Bands Count': props<{ bandsCount: number }>(),
  },
});

export const ResistorApiActions = createActionGroup({
  source: 'Resistor API',
  events: {
    'Retrieve Resistor': emptyProps(),
    'Retrieve Resistor success': props<{ resistor: Readonly<Resistor> }>(),
  },
});
