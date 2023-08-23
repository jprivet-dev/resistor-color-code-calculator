import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CharacteristicsComponent } from './characteristics.component';
import { ResistorColorDirective } from './resistor-color.directive';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorComponent } from './resistor.component';
import { ResistorPageComponent } from './resistor.page';
import { ResistorOffcanvasContentComponent } from './resistor-offcanvas-content.component';

@NgModule({
  declarations: [
    ResistorPageComponent,
    ResistorComponent,
    CharacteristicsComponent,
    ResistorColorDirective,
    ResistorOffcanvasContentComponent,
  ],
  imports: [CommonModule, SharedModule, ResistorRoutingModule],
})
export class ResistorModule {}
