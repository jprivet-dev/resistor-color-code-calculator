import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { resistorReducer } from './resistor/state/resistor.reducer';
import { characteristicsReducer } from './resistor/state/resistor.reducer';
import { TranslocoRootModule } from './transloco-root.module';
import { EffectsModule } from '@ngrx/effects';
import { ResistorEffects } from './resistor/state/resistor.effects';

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
      resistor: resistorReducer,
      characteristics: characteristicsReducer,
    }),
    EffectsModule.forRoot([ResistorEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
