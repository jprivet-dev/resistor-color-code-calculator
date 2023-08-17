import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Resistor } from '../resistor.model';
import { BandColor } from '../resistor.model';

export const resistorActions = createActionGroup({
  source: 'Resistor',
  events: {
    'Update Digit 1': props<{ color: BandColor }>(),
    'Update Digit 2': props<{ color: BandColor }>(),
    'Update Digit 3': props<{ color: BandColor }>(),
    'Update Multiplier': props<{ color: BandColor }>(),
    'Update Tolerance': props<{ color: BandColor }>(),
    'Update Thermal Coefficient': props<{ color: BandColor }>(),
    'Update Bands Count': props<{ bandsCount: number }>(),
  },
});

export const resistorApiActions = createActionGroup({
  source: 'Resistor API',
  events: {
    'Retrieve Resistor': emptyProps(),
    'Retrieve Resistor success': props<{ resistor: Readonly<Resistor> }>(),
  },
});

export const characteristicsActions = createActionGroup({
  source: 'Characteristics',
  events: {
    'Update Resistance': props<{ resistance: number }>(),
  },
});
