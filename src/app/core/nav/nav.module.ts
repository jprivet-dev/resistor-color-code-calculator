import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  imports: [CommonModule, RouterModule, NgbDropdownModule, NgbCollapseModule],
})
export class NavModule {}
