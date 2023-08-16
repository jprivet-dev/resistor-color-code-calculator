import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '@shared/shared.module';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorPage } from './resistor.page';
import { ResistorObjectComponent } from './io/resistor-object.component';
import { ResistorTableComponent } from './io/resistor-table.component';
import { ResistorChooseBandsComponent } from './io/resistor-choose-bands.component';
import { ResistorComponent } from './resistor.component';
import { ResistorDataComponent } from './resistor-data.component';

@NgModule({
  declarations: [ResistorPage, ResistorObjectComponent, ResistorTableComponent, ResistorChooseBandsComponent, ResistorComponent, ResistorDataComponent],
  imports: [CommonModule, SharedModule, ResistorRoutingModule, TranslocoModule],
})
export class ResistorModule {}
