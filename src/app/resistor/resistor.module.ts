import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CharacteristicsComponent } from './characteristics.component';
import { ResistorColorDirective } from './resistor-color.directive';
import { ResistorOffcanvasComponent } from './resistor-offcanvas.component';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorComponent } from './resistor.component';
import { ResistorPageComponent } from './resistor.page';

@NgModule({
  declarations: [
    ResistorPageComponent,
    ResistorComponent,
    CharacteristicsComponent,
    ResistorColorDirective,
    ResistorOffcanvasComponent,
  ],
  imports: [CommonModule, SharedModule, ResistorRoutingModule],
})
export class ResistorModule {}
