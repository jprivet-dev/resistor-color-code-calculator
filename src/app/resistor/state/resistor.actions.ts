import { createActionGroup, props } from '@ngrx/store';
import { Resistor } from '../resistor.model';

export const ResistorActions = createActionGroup({
  source: 'Resistor',
  events: {
    'Band digit 1': props<{ color: string }>(),
    'Band digit 2': props<{ color: string }>(),
    'Band digit 3': props<{ color: string }>(),
    'Band multiplier': props<{ color: string }>(),
    'Band tolerance': props<{ color: string }>(),
    'Band thermal coefficient': props<{ color: string }>(),
  },
});

export const ResistorApiActions = createActionGroup({
  source: 'Resistor API',
  events: {
    'Retrieved resistor': props<{ resistor: Readonly<Resistor> }>(),
  },
});
