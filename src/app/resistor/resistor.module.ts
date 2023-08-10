import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '@shared/shared.module';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorComponent } from './resistor.component';

@NgModule({
  declarations: [ResistorComponent],
  imports: [CommonModule, SharedModule, ResistorRoutingModule, TranslocoModule],
})
export class ResistorModule {}
