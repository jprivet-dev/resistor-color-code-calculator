import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [FormatPipe],
  imports: [CommonModule],
  exports: [FormatPipe],
})
export class SharedModule {}
