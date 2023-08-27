import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ResistorOhmLawComponent } from './io/resistor-ohm-law.component';
import { ResistorColorDirective } from './resistor-color.directive';
import { ResistorOffcanvasComponent } from './resistor-offcanvas.component';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorTabsComponent } from './resistor-tabs.component';
import { ResistorComponent } from './resistor.component';
import { ResistorPageComponent } from './resistor.page';
import { ResistorCharacteristicsComponent } from './io/resistor-characteristics.component';

@NgModule({
  declarations: [
    ResistorPageComponent,
    ResistorComponent,
    ResistorTabsComponent,
    ResistorColorDirective,
    ResistorOffcanvasComponent,
    ResistorOhmLawComponent,
    ResistorCharacteristicsComponent,
  ],
  imports: [CommonModule, SharedModule, ResistorRoutingModule],
})
export class ResistorModule {}
