import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorComponent } from './resistor.component';

@NgModule({
  declarations: [
    ResistorComponent
  ],
  imports: [CommonModule, ResistorRoutingModule],
})
export class ResistorModule {}
