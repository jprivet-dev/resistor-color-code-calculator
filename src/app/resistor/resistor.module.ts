import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '@shared/shared.module';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorPage } from './resistor.page';

@NgModule({
  declarations: [ResistorPage],
  imports: [CommonModule, SharedModule, ResistorRoutingModule, TranslocoModule],
})
export class ResistorModule {}
