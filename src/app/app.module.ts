import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ResistorEffects } from './resistor/state/resistor.effects';
import {
  characteristicsReducer,
  resistorReducer,
  resistorReducerDecode,
} from './resistor/state/resistor.reducer';
import { ResistorFeatures } from './resistor/state/resistor.selectors';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslocoRootModule,
    StoreModule.forRoot({
      [ResistorFeatures.Resistor]: resistorReducer,
      [ResistorFeatures.Decode]: resistorReducerDecode,
      [ResistorFeatures.Characteristics]: characteristicsReducer,
    }),
    EffectsModule.forRoot([ResistorEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
