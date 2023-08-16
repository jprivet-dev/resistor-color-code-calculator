import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatPipe } from './format.pipe';
import { ResistorColorDirective } from './resistor-color.directive';

@NgModule({
  declarations: [FormatPipe, ResistorColorDirective],
  imports: [CommonModule],
  exports: [FormatPipe, ResistorColorDirective],
})
export class SharedModule {}
