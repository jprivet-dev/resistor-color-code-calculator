import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ResistorNavBandsComponent } from './io/resistor-nav-bands.component';
import { ResistorObjectComponent } from './io/resistor-object.component';
import { ResistorOhmLawComponent } from './io/resistor-ohm-law.component';
import { ResistorTableCharacteristicsComponent } from './io/resistor-table-characteristics.component';
import { ResistorColorDirective } from './resistor-color.directive';
import { ResistorOffcanvasComponent } from './resistor-offcanvas.component';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorTabsComponent } from './resistor-tabs.component';
import { ResistorComponent } from './resistor.component';
import { ResistorPageComponent } from './resistor.page';

@NgModule({
  declarations: [
    ResistorPageComponent,
    ResistorComponent,
    ResistorTabsComponent,
    ResistorColorDirective,
    ResistorOffcanvasComponent,
    ResistorOhmLawComponent,
    ResistorTableCharacteristicsComponent,
    ResistorObjectComponent,
    ResistorNavBandsComponent,
  ],
  imports: [CommonModule, SharedModule, ResistorRoutingModule],
})
export class ResistorModule {}
