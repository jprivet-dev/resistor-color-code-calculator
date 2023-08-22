import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoModule } from '@ngneat/transloco';
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [FormatPipe],
  imports: [CommonModule],
  exports: [FormatPipe, TranslocoModule, NgbNavModule, NgbTooltipModule],
})
export class SharedModule {}
