import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorComponent } from './resistor.component';

@NgModule({
  declarations: [ResistorComponent],
  imports: [CommonModule, ResistorRoutingModule, TranslocoModule],
})
export class ResistorModule {}
