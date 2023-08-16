import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatPipe } from './format.pipe';
import { ResistorColorDirective } from './resistor-color.directive';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FormatPipe, ResistorColorDirective],
  imports: [CommonModule],
  exports: [FormatPipe, ResistorColorDirective, NgbNavModule],
})
export class SharedModule {}
