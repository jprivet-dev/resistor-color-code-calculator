import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '@shared/shared.module';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  imports: [CommonModule, RouterModule, SharedModule, TranslocoModule],
})
export class NavModule {}
