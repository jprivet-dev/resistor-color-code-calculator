import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { FormatPipe } from './format.pipe';
import { NgbModule } from './ngb.module';

@NgModule({
  declarations: [FormatPipe],
  imports: [CommonModule],
  exports: [FormatPipe, TranslocoModule, NgbModule],
})
export class SharedModule {}
