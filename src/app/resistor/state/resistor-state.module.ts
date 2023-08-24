import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResistorEffects } from './resistor.effects';
import {
  characteristicsReducer,
  resistorReducer,
  resistorReducerDecode,
} from './resistor.reducer';
import { ResistorFeatures } from './resistor.selectors';

@NgModule({
  imports: [
    // TODO: create a feature instead https://ngrx.io/guide/store/feature-creators
    StoreModule.forRoot({
      [ResistorFeatures.Resistor]: resistorReducer,
      [ResistorFeatures.Decode]: resistorReducerDecode,
      [ResistorFeatures.Characteristics]: characteristicsReducer,
    }),
    EffectsModule.forRoot([ResistorEffects]),
  ],
})
export class ResistorStateModule {}
