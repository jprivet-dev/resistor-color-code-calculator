import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '@shared/shared.module';

import { ResistorRoutingModule } from './resistor-routing.module';
import { ResistorPageComponent } from './resistor.page';
import { ResistorComponent } from './resistor.component';
import { CharacteristicsComponent } from './characteristics.component';
import { ResistorColorDirective } from './resistor-color.directive';

@NgModule({
  declarations: [
    ResistorPageComponent,
    ResistorComponent,
    CharacteristicsComponent,
    ResistorColorDirective,
  ],
  imports: [CommonModule, SharedModule, ResistorRoutingModule, TranslocoModule],
})
export class ResistorModule {}
