import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { FormatPipe } from './format.pipe';
import { NgbModule } from './ngb.module';
import { TitlePipe } from './title.pipe';

@NgModule({
  declarations: [FormatPipe, TitlePipe],
  imports: [CommonModule],
  exports: [FormatPipe, TitlePipe, TranslocoModule, NgbModule, FormsModule],
})
export class SharedModule {}
