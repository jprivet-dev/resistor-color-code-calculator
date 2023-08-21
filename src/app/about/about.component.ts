import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LangService } from '@core/lang/lang.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  private langService = inject(LangService);
  readonly langLabel$ = this.langService.langLabel$;
}
