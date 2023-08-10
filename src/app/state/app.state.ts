import { Resistor } from '../resistor/resistor.model';

export interface AppState {
  resistor: Readonly<Resistor>;
}

// export const selectResistor = (state: AppState) => state.resistor;
