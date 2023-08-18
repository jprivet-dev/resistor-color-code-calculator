import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatPipe } from './format.pipe';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FormatPipe],
  imports: [CommonModule],
  exports: [FormatPipe, NgbNavModule, NgbTooltipModule],
})
export class SharedModule {}
