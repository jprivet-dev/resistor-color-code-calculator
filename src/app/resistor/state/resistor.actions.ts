import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Resistor } from '../resistor.model';

export const ResistorActions = createActionGroup({
  source: 'Resistor',
  events: {
    'Update Digit 1': props<{ color: string }>(),
    'Update Digit 2': props<{ color: string }>(),
    'Update Digit 3': props<{ color: string }>(),
    'Update Multiplier': props<{ color: string }>(),
    'Update Tolerance': props<{ color: string }>(),
    'Update Thermal Coefficient': props<{ color: string }>(),
    'Update Bands Count': props<{ bandsCount: number }>(),
  },
});

export const ResistorApiActions = createActionGroup({
  source: 'Resistor API',
  events: {
    'Retrieve Resistor': emptyProps(),
    'Retrieve Resistor success': props<{ resistor: Readonly<Resistor> }>(),
  },
});
